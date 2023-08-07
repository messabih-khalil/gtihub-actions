import { expect, it } from 'vitest';
import axios from 'axios';

it('should greeting', async () => {
    const res = await axios.get('http://127.0.0.1:3000/');

    expect(res.data).toEqual('Hello, TypeScript Express!');
});

it('should post new user', async () => {
    const data = {
        name: 'messabih',
        email: 'messabih@gmail.com',
    };

    const res = await axios.post('http://127.0.0.1:3000/users', data);

    expect(res).toBeDefined();
});
