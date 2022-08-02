// deno-lint-ignore-file no-explicit-any
import { superoak } from 'https://deno.land/x/superoak@2.3.1/mod.ts';
import { describe, it } from 'https://deno.land/x/superoak@2.3.1/test/utils.ts';
import { expect } from 'https://deno.land/x/superoak@2.3.1/test/deps.ts';
import { app } from './server.tsx';

describe('GET request to root url', () => {
  it('Sends 200 Status and Content Type text/html', async (done: () => void) => {
    (await superoak(app)).get('/').end((_err: any, res: { status: any; type: any; }) => {
      expect(res.status).toEqual(200);
      expect(res.type).toEqual('text/html');
      done();
    });
  });
});

// deno test -A --unstable
