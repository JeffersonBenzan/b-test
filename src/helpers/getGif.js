import { APY_KEY } from '../constants';

export const getGif = async (category, type='fixed_width_small') => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${APY_KEY}&q=${encodeURI(category)}&&limit=10&offset=&rating=g&lang=en&bundle=messaging_non_clips`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
    const images = data.map(image=> image.images[type]);
    return images;
};
