import { expect, it } from 'vitest';
import axios from 'axios';
it('should post new user', async () => {
    const data = {
        name: 'messabih',
        email: 'messabih@gmail.com',
    };

    const res = await axios.post('http://127.0.0.1:3000', data);

    expect(res.status).toEqual(201);
});
