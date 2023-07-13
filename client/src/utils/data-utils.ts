
export const getData = async <T>(
    url: string,
    email: string,
    password: string
  )
  : Promise<T> => {
    const res = await fetch(url, {
      method: 'Post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    console.log(res.json());

    return await res.json();
  }
  