import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export const getRestaurants = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const category = req.query.category as string | undefined;
        const search = req.query.search as string | undefined;

        const skip = (page - 1) * limit;

        const where: any = {}

        if (category) {
            where.category = category;
        }

        if (search) {
            where.name = {
                contains: search,
                mode: 'insensitive',
            };
        }

        const [restaurants, total] = await Promise.all([
            prisma.restaurant.findMany({
                where,
                skip,
                take: limit,
                orderBy: { rating: 'desc' },
            }),
            prisma.restaurant.count({ where }),
        ]);

        res.json({
            data: restaurants,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch(error) {
        console.error('Get Restaurants error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getRestaurantById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;

        const restaurant = await prisma.restaurant.findUnique({
            where: { id },
            include: {
                menuItems: {
                    where: { isAvailable: true },
                    orderBy: { category: 'asc' },
                },
            },
        });

        if (!restaurant) {
            return res.status(400).json({ error: 'Restaurant not found' });
        }

        res.json(restaurant);
    } catch(error) {
        console.error('Get restaurant error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};