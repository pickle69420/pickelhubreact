/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/~uv/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uvconfig/uv.config.js',
    sw: '/uv/uv.sw.js',
};