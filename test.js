import test from 'ava';
import webpack from 'webpack';
import fs from 'fs';
import options from './webpack.config.js';

test('foo', t => {
  t.pass();
});

test('bar', async t => {
  const bar = Promise.resolve('bar');

  t.is(await bar, 'bar');
});

test.cb('The file should be compressed by gzip', t => {
  webpack(options, (err, stats) => {
    if (err) {
      return t.end(err);
    } else if (stats.hasErrors()) {
      return t.end(stats.toString());
    }

    const files = fs.readdirSync(options.output.path);

    t.true(files.indexOf('main.js') !== -1);
    t.true(files.indexOf('main.js.gz') !== -1);

    t.end();
  })
})
