/* eslint-disable no-unused-vars */
import { http } from 'msw'

export const handlers = [
  http.get('/api/user', ({ request }) => {
    return new Response(
      JSON.stringify({ name: 'Tom' }),
      {
        status: 200,
        handlers: {
          'Content-Type': 'application/json',
        },
      }
    )
  })
]