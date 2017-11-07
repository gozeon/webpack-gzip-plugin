```

               _                      _                    _                   _             _
              | |                    | |                  (_)                 | |           (_)
 __      _____| |__  _ __   __ _  ___| | ________ __ _ _____ _ __ ______ _ __ | |_   _  __ _ _ _ __
 \ \ /\ / / _ \ '_ \| '_ \ / _` |/ __| |/ /______/ _` |_  / | '_ \______| '_ \| | | | |/ _` | | '_ \
  \ V  V /  __/ |_) | |_) | (_| | (__|   <      | (_| |/ /| | |_) |     | |_) | | |_| | (_| | | | | |
   \_/\_/ \___|_.__/| .__/ \__,_|\___|_|\_\      \__, /___|_| .__/      | .__/|_|\__,_|\__, |_|_| |_|
                    | |                           __/ |     | |         | |             __/ |
                    |_|                          |___/      |_|         |_|            |___/

```

[![Build Status](https://travis-ci.org/gozeon/webpack-gzip-plugin.svg?branch=master)](https://travis-ci.org/gozeon/webpack-gzip-plugin)

# Usage

```bash
npm install webpack-gzip-plugin --save-dev
```

webpack.config.js

```javascript
const GzipPlugin = require('webpack-gzip-plugin');

plugins: [
  new GzipPlugin();
]
```

# License

MIT
