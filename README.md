```
#
# d8b
# 88P
# d88
# 888   d8888b  d888b8b  ?88,.d88b,  88bd88b d8888b ?88,  88P?88   d8P
# ?88  d8P' ?88d8P' ?88  `?88'  ?88  88P'  `d8P' ?88 `?8bd8P'd88   88
# 88b 88b  d8888b  ,88b   88b  d8P d88     88b  d88 d8P?8b, ?8(  d88
#  88b`?8888P'`?88P'`88b  888888P'd88'     `?8888P'd8P' `?8b`?88P'?8b
#                    )88  88P'                                     )88
#                   ,88P d88                                      ,d8P
#               `?8888P  ?8P                                   `?888P'
#
# log-proxy
# for all your man-in-the-middle debugging needs
```

## Usage

There are two environment variables, `HTTP_PORT`, and `TARGET_URL`, which default to `8000` and `localhost` respectively.

To run the simple log proxy, run:

```
$ docker run \
  --detach \
  --restart unless-stopped \
  --env TARGET_URL=http://yourtarget.com \
  --env HTTP_PORT=3000 \
  --publish 3000:3000 \
  docker.io/adamkdean/log-proxy
```

## Versions

`1.0.0` is the only version so far, it's very basic and does what I need.

## License

```
The Adam is the King license
============================

If you wish to share this work, or any derivative there of, you must proclaim on Twitter, "Adam (@imdsm) is the King!"

Failure to do so will result in me feeling sad.
```
