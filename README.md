#Hash Javascript SDK

Hash Javascript SDK lets developers connect their web apps to the Hedera Hashgraph platform. Allowing users to interact with apps on any modern browser.

##Documentation
See the [Developer Documentation](https://github.com/hashingsystems/hash.js)

##Installation
```
# Via NPM:
	npm install --save hash-sdk
	
# Via Yarn:
	yarn add hash-sdk
```

##Usage

You can integrate by simply importing `hash-sdk` into your program. Now, instead of just Composer Chrome Extension opening, a modal will show instead with an option to input a private key or mnemonic. It works across all modern desktop and mobile browsers such as Chrome, Safari, Brave and Firefox.


```
// add to your project
import hash from 'hash-sdk'

// start modal 
await hash.selectMiddleware();

// send transactions like you're used to
hash.triggerCryptoTransfer(data, (err,res)=>{...);

```