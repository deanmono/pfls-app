#!/bin/sh

exec json-server --watch exchange.json --port 4100 &
exec npm start --host=0.0.0.0
