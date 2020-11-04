# KSend

Heavily inspired by [JSend: https://github.com/omniti-labs/jsend](https://github.com/omniti-labs/jsend)
But developed a bit further, thus the changed prefix: J -> K

The differences are:

- The "code" property of "fail" and "error" responses is a string and not optional
- The structure of a "fail" response is equal to an "error" response (though obviously the status differs)

`yarn add @technik-sde/ksend` or `npm install @technik-sde/ksend`
