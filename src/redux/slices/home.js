import { createSlice } from '@reduxjs/toolkit';
import Image1 from '../../assets/home/Image 1.png';
import Image2 from '../../assets/home/Image 2.png';
import Image3 from '../../assets/home/Image 3.png';
import Image5 from '../../assets/home/Image 5.png';
import Image6 from '../../assets/home/Image 6.png';

const homeSlice = createSlice({
  // меняется короткое название редьюсера
  name: 'home',
  initialState: {
    // меняется начальное состояние редьюсера
    dishes: [
      {
        title: 'Spicy seasoned seafood noodles',
        price: 2.29,
        available: 20,
        cover: '/static/media/Image 1.1d304750.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'grill',
        count: 1,
      },
      {
        title: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
        cover: '/static/media/Image 2.5cdedce0.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'soup',
        count: 1,
      },
      {
        title: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
        cover: '/static/media/Image 3.b37f6bec.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'hot dishes',
        count: 1,
      },
      {
        title: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'appetizer',
        count: 1,
      },
      {
        title: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'hot dishes',
        count: 1,
      },
      {
        title: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
        cover: '/static/media/Image 6.45f2231c.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'appetizer',
        count: 1,
      },
      {
        title: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
        cover: '/static/media/Image 2.5cdedce0.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'grill',
        count: 1,
      },
      {
        title: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
        cover: '/static/media/Image 3.b37f6bec.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'appetizer',
        count: 1,
      },
      {
        title: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'appetizer',
        count: 1,
      },
      {
        title: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
        cover: '/static/media/Image 6.45f2231c.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'grill',
        count: 1,
      },
      {
        title: 'Spicy seasoned seafood noodles',
        price: 2.29,
        available: 20,
        cover: '/static/media/Image 1.1d304750.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'cold dishes',
        count: 1,
      },
      {
        title: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
        cover: '/static/media/Image 2.5cdedce0.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'grill',
        count: 1,
      },
      {
        title: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
        cover: '/static/media/Image 3.b37f6bec.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
        cover: '/static/media/Image 6.45f2231c.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'soup',
        count: 1,
      },
      {
        title: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
        cover: '/static/media/Image 2.5cdedce0.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
        cover: '/static/media/Image 3.b37f6bec.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'grill',
        count: 1,
      },
      {
        title: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'grill',
        count: 1,
      },
      {
        title: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'soup',
        count: 1,
      },
      {
        title: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
        cover: '/static/media/Image 6.45f2231c.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'grill',
        count: 1,
      },
      {
        title: 'Spicy seasoned seafood noodles',
        price: 2.29,
        available: 20,
        cover: '/static/media/Image 1.1d304750.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'hot dishes',
        count: 1,
      },
      {
        title: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
        cover: '/static/media/Image 2.5cdedce0.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
        cover: '/static/media/Image 3.b37f6bec.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'cold dishes',
        count: 1,
      },
      {
        title: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'appetizer',
        count: 1,
      },
      {
        title: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
        cover: '/static/media/Image 6.45f2231c.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'hot dishes',
        count: 1,
      },
      {
        title: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
        cover: '/static/media/Image 2.5cdedce0.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'hot dishes',
        count: 1,
      },
      {
        title: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
        cover: '/static/media/Image 3.b37f6bec.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'appetizer',
        count: 1,
      },
      {
        title: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
        cover: '/static/media/Image 6.45f2231c.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'hot dishes',
        count: 1,
      },
      {
        title: 'Spicy seasoned seafood noodles',
        price: 2.29,
        available: 20,
        cover: '/static/media/Image 1.1d304750.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'grill',
        count: 1,
      },
      {
        title: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
        cover: '/static/media/Image 2.5cdedce0.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'hot dishes',
        count: 1,
      },
      {
        title: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
        cover: '/static/media/Image 3.b37f6bec.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'appetizer',
        count: 1,
      },
      {
        title: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
        cover: '/static/media/Image 6.45f2231c.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'hot dishes',
        count: 1,
      },
      {
        title: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
        cover: '/static/media/Image 2.5cdedce0.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'appetizer',
        count: 1,
      },
      {
        title: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
        cover: '/static/media/Image 3.b37f6bec.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'appetizer',
        count: 1,
      },
      {
        title: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'soup',
        count: 1,
      },
      {
        title: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'appetizer',
        count: 1,
      },
      {
        title: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
        cover: '/static/media/Image 6.45f2231c.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'soup',
        count: 1,
      },
      {
        title: 'Spicy seasoned seafood noodles',
        price: 2.29,
        available: 20,
        cover: '/static/media/Image 1.1d304750.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
        cover: '/static/media/Image 2.5cdedce0.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
        cover: '/static/media/Image 3.b37f6bec.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'appetizer',
        count: 1,
      },
      {
        title: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'grill',
        count: 1,
      },
      {
        title: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'soup',
        count: 1,
      },
      {
        title: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
        cover: '/static/media/Image 6.45f2231c.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'soup',
        count: 1,
      },
      {
        title: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
        cover: '/static/media/Image 2.5cdedce0.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'appetizer',
        count: 1,
      },
      {
        title: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
        cover: '/static/media/Image 3.b37f6bec.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'soup',
        count: 1,
      },
      {
        title: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'cold dishes',
        count: 1,
      },
      {
        title: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'cold dishes',
        count: 1,
      },
      {
        title: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
        cover: '/static/media/Image 6.45f2231c.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'hot dishes',
        count: 1,
      },
      {
        title: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
        cover: '/static/media/Image 3.b37f6bec.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
        cover: '/static/media/Image 6.45f2231c.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'hot dishes',
        count: 1,
      },
      {
        title: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
        cover: '/static/media/Image 2.5cdedce0.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'appetizer',
        count: 1,
      },
      {
        title: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
        cover: '/static/media/Image 3.b37f6bec.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'soup',
        count: 1,
      },
      {
        title: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'dessert',
        count: 1,
      },
      {
        title: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
        cover: '/static/media/Image 5.c190bd87.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'soup',
        count: 1,
      },
      {
        title: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
        cover: '/static/media/Image 6.45f2231c.png',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis sit perspiciatis recusandae reprehenderit excepturi fugiat, tempore similique quaerat asperiores quis esse distinctio, repudiandae aut dolor fugit molestiae maxime libero.',
        calories: 456,
        category: 'hot dishes',
        count: 1,
      },
    ],
    menuTabs: [
      'hot dishes',
      'cold dishes',
      'soup',
      'grill',
      'appetizer',
      'dessert',
    ],
    orderTypes: ['dine in', 'to go', 'delivery'],
  },

  reducers: {
    // меняется набор редьюсеров
    changeTheme: (state, action) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

// меняются только названия переменных
const homeReducer = homeSlice.reducer;
// экспорт экшенов в компоненты
export const { changeTheme } = homeSlice.actions;
// из слайса мы забираем редьюсер чтобы его экспортировать в стор
export default homeReducer;
