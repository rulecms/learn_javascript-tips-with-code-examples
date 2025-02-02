export const tips = [
  {
    slug: 'hoisting',
    title: 'Understanding Hoisting',
    summary: 'Learn how JavaScript hoists variables and functions.',
    description: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top of their scope. While the declarations are hoisted, initializations are not.',
    codeSnippet: `console.log(x); // undefined
var x = 5;

// What's actually happening:
var x;
console.log(x);
x = 5;`
  },
  {
    slug: 'closure',
    title: 'Closures Explained',
    summary: 'Master JavaScript closures for better code organization.',
    description: 'A closure is the combination of a function and the lexical environment within which that function was declared. This lets the function access variables in its outer scope.',
    codeSnippet: `function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
counter.increment();
console.log(counter.getCount()); // 1`
  },
  {
    slug: 'destructuring',
    title: 'Array and Object Destructuring',
    summary: 'Simplify your code with destructuring assignment.',
    description: 'Destructuring allows you to unpack values from arrays or properties from objects into distinct variables with a concise syntax.',
    codeSnippet: `const person = { name: 'John', age: 30 };
const { name, age } = person;

const numbers = [1, 2, 3];
const [first, second] = numbers;`
  },
  {
    slug: 'arrow-functions',
    title: 'Arrow Function Syntax',
    summary: 'Write cleaner functions with arrow syntax.',
    description: 'Arrow functions provide a concise syntax for writing function expressions. They also lexically bind the this value, making them ideal for callbacks.',
    codeSnippet: `// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;`
  },
  {
    slug: 'spread-operator',
    title: 'Spread Operator Magic',
    summary: 'Learn to use the spread operator effectively.',
    description: 'The spread operator (...) allows an array or object to be expanded into individual elements, making it perfect for array manipulation and object merging.',
    codeSnippet: `const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const obj1 = { foo: 'bar' };
const obj2 = { ...obj1, baz: 'qux' };`
  },
  {
    slug: 'async-await',
    title: 'Async/Await Patterns',
    summary: 'Write cleaner asynchronous code.',
    description: 'Async/await is a modern way to handle Promises, making asynchronous code look and behave more like synchronous code.',
    codeSnippet: `async function fetchData() {
  try {
    const response = await fetch('api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}`
  },
  {
    slug: 'optional-chaining',
    title: 'Optional Chaining',
    summary: 'Safely access nested object properties.',
    description: 'Optional chaining (?.) allows you to safely access deeply nested object properties without worrying about null or undefined values.',
    codeSnippet: `const user = {
  address: {
    street: 'Main St'
  }
};

const zipCode = user?.address?.zipCode;
// Returns undefined instead of throwing error`
  },
  {
    slug: 'nullish-coalescing',
    title: 'Nullish Coalescing Operator',
    summary: 'Handle null/undefined values elegantly.',
    description: 'The nullish coalescing operator (??) provides a way to specify a default value when dealing with null or undefined values.',
    codeSnippet: `const value = null;
const defaultValue = value ?? 'default';
// defaultValue = 'default'

const zero = 0;
const result = zero ?? 42;
// result = 0`
  },
  {
    slug: 'template-literals',
    title: 'Template Literals',
    summary: 'Create dynamic strings easily.',
    description: 'Template literals allow you to create multiline strings and use string interpolation with ${expression} syntax.',
    codeSnippet: `const name = 'World';
const greeting = \`Hello
  ${name}!
  Welcome to JavaScript\`;`
  },
  {
    slug: 'array-methods',
    title: 'Array Methods',
    summary: 'Master essential array operations.',
    description: 'Modern JavaScript provides powerful array methods like map, filter, and reduce for data transformation and manipulation.',
    codeSnippet: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((a, b) => a + b, 0);`
  },
  {
    slug: 'object-methods',
    title: 'Object Methods',
    summary: 'Explore useful object manipulation techniques.',
    description: 'JavaScript offers various methods to work with objects, including Object.keys(), Object.values(), and Object.entries().',
    codeSnippet: `const person = { name: 'John', age: 30 };
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);`
  },
  {
    slug: 'sets',
    title: 'Using Sets',
    summary: 'Work with unique value collections.',
    description: 'Sets are collections of unique values that provide an elegant way to remove duplicates and manage unique items.',
    codeSnippet: `const numbers = [1, 2, 2, 3, 3, 4];
const uniqueNumbers = [...new Set(numbers)];
// [1, 2, 3, 4]`
  },
  {
    slug: 'maps',
    title: 'Map Data Structure',
    summary: 'Use Maps for key-value associations.',
    description: 'Maps provide a way to store key-value pairs where both keys and values can be of any type, unlike regular objects.',
    codeSnippet: `const userMap = new Map();
userMap.set('john', { age: 30 });
userMap.set('jane', { age: 25 });
console.log(userMap.get('john'));`
  },
  {
    slug: 'generators',
    title: 'Generator Functions',
    summary: 'Create iterative algorithms easily.',
    description: 'Generator functions provide a powerful way to define iterative algorithms by maintaining their own state.',
    codeSnippet: `function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1`
  },
  {
    slug: 'proxy',
    title: 'Proxy Objects',
    summary: 'Intercept and customize object operations.',
    description: 'Proxies enable you to create custom behaviors for basic object operations like property lookup, assignment, and enumeration.',
    codeSnippet: `const handler = {
  get: (target, prop) => \`Property \${prop}\`
};
const proxy = new Proxy({}, handler);
console.log(proxy.name); // "Property name"`
  },
  {
    slug: 'decorators',
    title: 'Class Decorators',
    summary: 'Enhance classes with decorators.',
    description: 'Decorators provide a way to add both annotations and meta-programming syntax to class declarations and members.',
    codeSnippet: `function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Example {
  @readonly
  pi() { return 3.14; }
}`
  },
  {
    slug: 'modules',
    title: 'ES Modules',
    summary: 'Organize code with modules.',
    description: 'ES Modules provide a standard way to organize and share code between JavaScript files.',
    codeSnippet: `// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5`
  },
  {
    slug: 'regex',
    title: 'Regular Expressions',
    summary: 'Master pattern matching in strings.',
    description: 'Regular expressions provide a powerful way to perform pattern matching and text manipulation in strings.',
    codeSnippet: `const email = 'test@example.com';
const isValid = /^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)*\\.[a-zA-Z]{2,}$/.test(email);
console.log(isValid); // true`
  },
  {
    slug: 'web-apis',
    title: 'Web APIs',
    summary: 'Interact with browser APIs.',
    description: 'Modern browsers provide powerful APIs for features like storage, geolocation, and real-time communications.',
    codeSnippet: `// Local Storage
localStorage.setItem('user', 'John');
const user = localStorage.getItem('user');

// Geolocation
navigator.geolocation.getCurrentPosition(
  pos => console.log(pos.coords)
);`
  },
  {
    slug: 'promises',
    title: 'Promise Chaining',
    summary: 'Master promise chaining patterns.',
    description: 'Promise chaining allows you to perform sequential asynchronous operations while keeping the code clean and avoiding callback hell.',
    codeSnippet: `fetch('/api/user')
  .then(response => response.json())
  .then(user => fetch("/api/posts/\${user.id}"))
  .then(posts => console.log(posts))
  .catch(error => console.error(error));`
  },
  {
    slug: 'symbol',
    title: 'Symbol Type',
    summary: 'Use unique identifiers.',
    description: 'Symbols are unique and immutable primitive values that can be used as keys for object properties.',
    codeSnippet: `const uniqueKey = Symbol('description');
const obj = {
  [uniqueKey]: 'value'
};
console.log(obj[uniqueKey]);`
  },
  {
    slug: 'iterators',
    title: 'Custom Iterators',
    summary: 'Create custom iterations.',
    description: 'The iterator protocol allows you to define how an object should be iterated, enabling custom iteration behavior.',
    codeSnippet: `const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { value: this.current++, done: false };
        }
        return { done: true };
      }
    };
  }
};`
  },
  {
    slug: 'weakmap',
    title: 'WeakMap Usage',
    summary: 'Memory-friendly key-value store.',
    description: 'WeakMap holds weak references to key objects, allowing them to be garbage collected when no longer referenced elsewhere.',
    codeSnippet: `let obj = { data: 'value' };
const wm = new WeakMap();
wm.set(obj, 'metadata');
obj = null; // object can be garbage collected`
  },
  {
    slug: 'weakset',
    title: 'WeakSet Collection',
    summary: 'Store weak object references.',
    description: 'WeakSet lets you store weak object references that don\'t prevent garbage collection of their elements.',
    codeSnippet: `let obj = { data: 'value' };
const ws = new WeakSet();
ws.add(obj);
obj = null; // object can be garbage collected`
  },
  {
    slug: 'typed-arrays',
    title: 'Typed Arrays',
    summary: 'Work with binary data.',
    description: 'Typed arrays provide a mechanism for accessing raw binary data in a structured way.',
    codeSnippet: `const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log(int32View[0]); // 42`
  },
  {
    slug: 'reflection',
    title: 'Reflection API',
    summary: 'Examine object structure.',
    description: 'The Reflection API provides methods for interceptable JavaScript operations, useful for metaprogramming.',
    codeSnippet: `const obj = { x: 1 };
console.log(Reflect.has(obj, 'x')); // true
Reflect.set(obj, 'y', 2);
console.log(obj.y); // 2`
  },
  {
    slug: 'bigint',
    title: 'BigInt Numbers',
    summary: 'Work with large integers.',
    description: 'BigInt allows you to work with integers larger than 2^53, which is the largest number JavaScript can reliably represent with Number.',
    codeSnippet: `const bigNumber = 9007199254740991n;
console.log(bigNumber + 1n);
console.log(typeof bigNumber); // 'bigint'`
  },
  {
    slug: 'private-fields',
    title: 'Private Class Fields',
    summary: 'Create truly private properties.',
    description: 'Private class fields allow you to define class members that are only accessible within the class itself.',
    codeSnippet: `class Counter {
  #count = 0;
  increment() {
    return ++this.#count;
  }
}`
  },
  {
    slug: 'intl',
    title: 'Internationalization',
    summary: 'Format dates and numbers.',
    description: 'The Intl object provides language sensitive string comparison, number formatting, and date and time formatting.',
    codeSnippet: `const number = 123456.789;
console.log(new Intl.NumberFormat('de-DE').format(number));
// 123.456,789`
  },
  {
    slug: 'performance',
    title: 'Performance API',
    summary: 'Measure code performance.',
    description: 'The Performance API provides access to timing-related information for the current page.',
    codeSnippet: `const t0 = performance.now();
// Some code to measure
const t1 = performance.now();
console.log(\`Operation took \${t1 - t0} ms\`);`
  },
  {
    slug: 'web-workers',
    title: 'Web Workers',
    summary: 'Run scripts in background threads.',
    description: 'Web Workers allow you to run scripts in background threads, enabling parallel processing without blocking the main thread.',
    codeSnippet: `const worker = new Worker('worker.js');
worker.postMessage({ data: 'process this' });
worker.onmessage = (e) => console.log(e.data);`
  },
  {
    slug: 'intersection-observer',
    title: 'Intersection Observer',
    summary: 'Track element visibility.',
    description: 'The Intersection Observer API provides a way to detect when elements enter or leave the viewport.',
    codeSnippet: `const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});`
  },
  {
    slug: 'mutation-observer',
    title: 'Mutation Observer',
    summary: 'Watch DOM changes.',
    description: 'MutationObserver lets you watch for changes being made to the DOM tree.',
    codeSnippet: `const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    console.log(mutation.type);
  });
});
observer.observe(element, { childList: true });`
  },
  {
    slug: 'broadcast-channel',
    title: 'BroadcastChannel API',
    summary: 'Communicate between tabs.',
    description: 'BroadcastChannel API allows communication between different tabs, windows, and iframes of the same origin.',
    codeSnippet: `const bc = new BroadcastChannel('test_channel');
bc.postMessage('Hello from tab A!');
bc.onmessage = (event) => console.log(event.data);`
  },
  {
    slug: 'resize-observer',
    title: 'Resize Observer',
    summary: 'Track element size changes.',
    description: 'ResizeObserver provides a way to react to changes in element dimensions.',
    codeSnippet: `const observer = new ResizeObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.contentRect);
  });
});
observer.observe(element);`
  },
  {
    slug: 'web-animations',
    title: 'Web Animations API',
    summary: 'Create dynamic animations.',
    description: 'The Web Animations API provides control over browser animations through JavaScript.',
    codeSnippet: `element.animate([
  { transform: 'scale(1)' },
  { transform: 'scale(1.5)' }
], {
  duration: 1000,
  iterations: Infinity
});`
  },
  {
    slug: 'credential-management',
    title: 'Credential Management',
    summary: 'Handle user credentials.',
    description: 'The Credential Management API enables websites to interact with user credentials.',
    codeSnippet: `navigator.credentials.get({
  password: true,
  mediation: 'optional'
}).then(credential => {
  if (credential) console.log('Got credential');
});`
  },
  {
    slug: 'payment-request',
    title: 'Payment Request API',
    summary: 'Handle payments in web apps.',
    description: 'The Payment Request API provides a consistent way to handle payments across different browsers.',
    codeSnippet: `const request = new PaymentRequest(
  [{ supportedMethods: 'basic-card' }],
  { total: { label: 'Total', amount: { currency: 'USD', value: '10.00' }}}
);`
  },
  {
    slug: 'web-share',
    title: 'Web Share API',
    summary: 'Native sharing capabilities.',
    description: 'The Web Share API enables websites to use the platform\'s native sharing capabilities.',
    codeSnippet: `navigator.share({
  title: 'Check this out',
  text: 'Interesting article',
  url: window.location.href
}).then(() => console.log('Shared successfully'));`
  },
  {
    slug: 'web-bluetooth',
    title: 'Web Bluetooth',
    summary: 'Connect to Bluetooth devices.',
    description: 'Web Bluetooth API allows websites to communicate with Bluetooth devices.',
    codeSnippet: `navigator.bluetooth.requestDevice({
  filters: [{ services: ['battery_service'] }]
}).then(device => device.gatt.connect());`
  },
  {
    slug: 'web-usb',
    title: 'Web USB',
    summary: 'Interact with USB devices.',
    description: 'The Web USB API provides a way to interact with USB devices from web applications.',
    codeSnippet: `navigator.usb.requestDevice({
  filters: [{ vendorId: 0x2341 }]
}).then(device => device.open());`
  },
  {
    slug: 'web-audio',
    title: 'Web Audio API',
    summary: 'Create and manipulate audio.',
    description: 'The Web Audio API provides a powerful system for controlling audio on the web.',
    codeSnippet: `const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.start();`
  },
  {
    slug: 'web-speech',
    title: 'Web Speech API',
    summary: 'Speech recognition and synthesis.',
    description: 'The Web Speech API enables speech recognition and text-to-speech functionality.',
    codeSnippet: `const synthesis = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance('Hello World');
synthesis.speak(utterance);`
  },
  {
    slug: 'web-crypto',
    title: 'Web Crypto API',
    summary: 'Cryptographic operations.',
    description: 'The Web Crypto API provides cryptographic functionality for web applications.',
    codeSnippet: `const data = new TextEncoder().encode('Secret data');
crypto.subtle.digest('SHA-256', data)
  .then(hash => console.log(new Uint8Array(hash)));`
  },
  {
    slug: 'media-recorder',
    title: 'MediaRecorder API',
    summary: 'Record audio and video.',
    description: 'The MediaRecorder API enables recording of audio and video streams.',
    codeSnippet: `navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    const recorder = new MediaRecorder(stream);
    recorder.start();
  });`
  },
  {
    slug: 'media-capabilities',
    title: 'Media Capabilities',
    summary: 'Check media playback support.',
    description: 'The Media Capabilities API provides information about the device\'s ability to play media.',
    codeSnippet: `navigator.mediaCapabilities.decodingInfo({
  type: 'file',
  video: {
    contentType: 'video/mp4;codecs=h264',
    width: 1920,
    height: 1080,
    bitrate: 2000000,
    framerate: 30
  }
});`
  },
  {
    slug: 'web-locks',
    title: 'Web Locks API',
    summary: 'Coordinate resource access.',
    description: 'The Web Locks API allows web apps to coordinate access to resources.',
    codeSnippet: `navigator.locks.request('resource_name', async lock => {
  // Critical section
  await doSomething();
});`
  },
  {
    slug: 'background-fetch',
    title: 'Background Fetch',
    summary: 'Download in background.',
    description: 'Background Fetch API allows downloading of large resources in the background.',
    codeSnippet: `navigator.serviceWorker.ready.then(registration => {
  registration.backgroundFetch.fetch(
    'large-file',
    ['/videos/movie.mp4'],
    { title: 'Downloading movie' }
  );
});`
  },
  {
    slug: 'image-capture',
    title: 'ImageCapture API',
    summary: 'Advanced camera control.',
    description: 'The ImageCapture API provides advanced camera controls for web applications.',
    codeSnippet: `navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    const track = stream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(track);
    return imageCapture.takePhoto();
  });`
  },
  {
    slug: 'contact-picker',
    title: 'Contact Picker API',
    summary: 'Access device contacts.',
    description: 'The Contact Picker API allows web apps to access the device\'s contacts.',
    codeSnippet: `const picker = new ContactsPicker();
picker.select(['name', 'email'])
  .then(contacts => console.log(contacts));`
  },
  {
    slug: 'web-bluetooth',
    title: 'Web Bluetooth API',
    summary: 'Connect to Bluetooth devices.',
    description: 'The Web Bluetooth API allows web apps to connect to and interact with Bluetooth Low Energy devices.',
    codeSnippet: `navigator.bluetooth.requestDevice({
  filters: [{ services: ['battery_service'] }]
})
.then(device => device.gatt.connect());`
  },
  {
    slug: 'web-nfc',
    title: 'Web NFC',
    summary: 'Read and write NFC tags.',
    description: 'Web NFC enables web applications to read and write NFC tags when they are in close proximity.',
    codeSnippet: `const ndef = new NDEFReader();
await ndef.write({
  records: [{ recordType: "text", data: "Hello NFC!" }]
});`
  },
  {
    slug: 'web-usb',
    title: 'Web USB API',
    summary: 'Connect to USB devices.',
    description: 'The Web USB API provides a way to safely connect to USB devices from web applications.',
    codeSnippet: `navigator.usb.requestDevice({
  filters: [{ vendorId: 0x2341 }]
})
.then(device => device.open());`
  },
  {
    slug: 'web-serial',
    title: 'Web Serial API',
    summary: 'Connect to serial devices.',
    description: 'The Web Serial API provides a way to read and write data to serial devices connected to your computer.',
    codeSnippet: `navigator.serial.requestPort()
  .then(port => port.open({ baudRate: 9600 }))
  .then(port => port.write(data));`
  },
  {
    slug: 'web-midi',
    title: 'Web MIDI API',
    summary: 'Interface with MIDI devices.',
    description: 'The Web MIDI API enables web applications to interact with MIDI musical instruments and devices.',
    codeSnippet: `navigator.requestMIDIAccess()
  .then(access => {
    for (let input of access.inputs.values()) {
      input.onmidimessage = message => console.log(message.data);
    }
  });`
  },
  {
    slug: 'credential-management',
    title: 'Credential Management',
    summary: 'Handle user credentials.',
    description: 'The Credential Management API enables web apps to interact with the browser\'s credential manager.',
    codeSnippet: `navigator.credentials.get({
  password: true,
  mediation: 'optional'
})
.then(cred => console.log(cred));`
  },
  {
    slug: 'web-animations',
    title: 'Web Animations API',
    summary: 'Create programmatic animations.',
    description: 'The Web Animations API provides a powerful way to create and control animations in JavaScript.',
    codeSnippet: `element.animate([
  { transform: 'scale(1)' },
  { transform: 'scale(1.5)' }
], {
  duration: 1000,
  iterations: Infinity
});`
  },
  {
    slug: 'web-audio',
    title: 'Web Audio API',
    summary: 'Advanced audio processing.',
    description: 'The Web Audio API provides a powerful system for controlling audio on the web.',
    codeSnippet: `const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.start();`
  },
  {
    slug: 'web-speech',
    title: 'Web Speech API',
    summary: 'Speech recognition and synthesis.',
    description: 'The Web Speech API enables web apps to handle voice data, including speech recognition and synthesis.',
    codeSnippet: `const recognition = new SpeechRecognition();
recognition.onresult = event => {
  console.log(event.results[0][0].transcript);
};
recognition.start();`
  },
  {
    slug: 'web-rtc',
    title: 'WebRTC',
    summary: 'Real-time communication.',
    description: 'WebRTC enables real-time communication of audio, video, and data in web browsers.',
    codeSnippet: `const pc = new RTCPeerConnection();
pc.createOffer()
  .then(offer => pc.setLocalDescription(offer))
  .then(() => sendSignalingMessage(pc.localDescription));`
  },
  {
    slug: 'web-crypto',
    title: 'Web Crypto API',
    summary: 'Cryptographic operations.',
    description: 'The Web Crypto API provides cryptographic functionality in web applications.',
    codeSnippet: `const data = new TextEncoder().encode('Hello');
crypto.subtle.digest('SHA-256', data)
  .then(hash => console.log(new Uint8Array(hash)));`
  },
  {
    slug: 'web-transport',
    title: 'WebTransport',
    summary: 'Modern network transport.',
    description: 'WebTransport provides modern networking capabilities with multiple streams and low latency.',
    codeSnippet: `const transport = new WebTransport('https://example.com:4433/wt');
const stream = await transport.createBidirectionalStream();
const writer = stream.writable.getWriter();
await writer.write(data);`
  },
  {
    slug: 'web-codecs',
    title: 'WebCodecs',
    summary: 'Low-level media coding.',
    description: 'WebCodecs provides low-level access to media encoders and decoders.',
    codeSnippet: `const decoder = new VideoDecoder({
  output: frame => {
    console.log(frame.timestamp);
    frame.close();
  },
  error: e => console.error(e)
});`
  },
  {
    slug: 'web-hid',
    title: 'WebHID',
    summary: 'Human Interface Devices.',
    description: 'The WebHID API allows web apps to interact with Human Interface Devices (HID).',
    codeSnippet: `navigator.hid.requestDevice({
  filters: [{ vendorId: 0x0483 }]
})
.then(devices => devices[0].open());`
  },
  {
    slug: 'web-gpu',
    title: 'WebGPU',
    summary: 'Modern graphics API.',
    description: 'WebGPU provides modern graphics and compute capabilities for web applications.',
    codeSnippet: `const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();
const context = canvas.getContext('webgpu');
const format = navigator.gpu.getPreferredCanvasFormat();`
  },
  {
    slug: 'web-nn',
    title: 'Web Neural Network',
    summary: 'Machine learning inference.',
    description: 'The Web Neural Network API enables running machine learning models in the browser.',
    codeSnippet: `const context = await navigator.ml.createContext();
const builder = new MLGraphBuilder(context);
const graph = await builder.build({
  input: builder.input('input', {type: 'float32', dimensions: [1, 28, 28, 1]})
});`
  },
  {
    slug: 'web-assembly',
    title: 'WebAssembly',
    summary: 'Run low-level code.',
    description: 'WebAssembly enables running low-level code at near-native speed in web browsers.',
    codeSnippet: `WebAssembly.instantiateStreaming(fetch('module.wasm'))
  .then(obj => {
    console.log(obj.instance.exports.add(1, 2));
  });`
  },
  {
    slug: 'web-bluetooth',
    title: 'Web Bluetooth',
    summary: 'Connect to Bluetooth devices.',
    description: 'The Web Bluetooth API provides a way to connect and interact with Bluetooth Low Energy devices.',
    codeSnippet: `navigator.bluetooth.requestDevice({
  filters: [{ services: ['battery_service'] }]
})
.then(device => device.gatt.connect());`
  },
  {
    slug: 'web-animations',
    title: 'Web Animations API',
    summary: 'Programmatic animations.',
    description: 'The Web Animations API provides control over browser animations through JavaScript.',
    codeSnippet: `element.animate([
  { transform: 'scale(1)' },
  { transform: 'scale(1.5)' }
], {
  duration: 1000,
  iterations: Infinity
});`
  },
  {
    slug: 'web-audio',
    title: 'Web Audio API',
    summary: 'Advanced audio processing.',
    description: 'The Web Audio API enables complex audio processing and synthesis in the browser.',
    codeSnippet: `const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.start();`
  },
  {
    slug: 'web-speech',
    title: 'Web Speech API',
    summary: 'Speech recognition and synthesis.',
    description: 'The Web Speech API enables speech recognition and text-to-speech functionality.',
    codeSnippet: `const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance('Hello World');
synth.speak(utterance);`
  },
  {
    slug: 'web-crypto',
    title: 'Web Crypto API',
    summary: 'Cryptographic operations.',
    description: 'The Web Crypto API provides cryptographic functionality for web applications.',
    codeSnippet: `const data = new TextEncoder().encode('Hello');
crypto.subtle.digest('SHA-256', data)
  .then(hash => console.log(new Uint8Array(hash)));`
  },
  {
    slug: 'web-locks',
    title: 'Web Locks API',
    summary: 'Coordinate resource access.',
    description: 'The Web Locks API enables coordination of resource access across multiple tabs.',
    codeSnippet: `navigator.locks.request('resource_name', async lock => {
  // Exclusive access to resource
  await doSomething();
});`
  },
  {
    slug: 'web-rtc',
    title: 'WebRTC',
    summary: 'Real-time communication.',
    description: 'WebRTC enables real-time peer-to-peer audio, video, and data communication.',
    codeSnippet: `const pc = new RTCPeerConnection();
pc.createOffer()
  .then(offer => pc.setLocalDescription(offer))
  .then(() => sendOfferToSignalingServer());`
  },
  {
    slug: 'web-serial',
    title: 'Web Serial API',
    summary: 'Serial port communication.',
    description: 'The Web Serial API allows websites to communicate with serial devices.',
    codeSnippet: `navigator.serial.requestPort()
  .then(port => port.open({ baudRate: 9600 }))
  .then(port => port.write(data));`
  },
  {
    slug: 'web-usb',
    title: 'WebUSB API',
    summary: 'USB device access.',
    description: 'The WebUSB API provides a way to safely expose USB device services to the web.',
    codeSnippet: `navigator.usb.requestDevice({ filters: [] })
  .then(device => device.open())
  .then(() => device.selectConfiguration(1));`
  },
  {
    slug: 'web-transport',
    title: 'WebTransport',
    summary: 'Modern network protocol.',
    description: 'WebTransport provides modern network capabilities with multiple streams and low latency.',
    codeSnippet: `const transport = new WebTransport('https://example.com:4433/wt');
const stream = await transport.createBidirectionalStream();
const writer = stream.writable.getWriter();`
  },
  {
    slug: 'web-gl2',
    title: 'WebGL 2',
    summary: '3D graphics rendering.',
    description: 'WebGL 2 provides advanced 3D graphics capabilities in the browser.',
    codeSnippet: `const gl = canvas.getContext('webgl2');
const program = gl.createProgram();
gl.useProgram(program);
gl.drawArrays(gl.TRIANGLES, 0, 3);`
  },
  {
    slug: 'web-components',
    title: 'Web Components',
    summary: 'Custom HTML elements.',
    description: 'Web Components allow you to create reusable custom elements with encapsulated functionality.',
    codeSnippet: `class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
}
customElements.define('my-element', MyElement);`
  },
  {
    slug: 'web-storage',
    title: 'Web Storage API',
    summary: 'Client-side storage.',
    description: 'The Web Storage API provides mechanisms to store key-value pairs in a web browser.',
    codeSnippet: `sessionStorage.setItem('key', 'value');
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');`
  },
  {
    slug: 'web-sockets',
    title: 'WebSocket API',
    summary: 'Full-duplex communication.',
    description: 'WebSocket enables two-way communication between a client and server over a single connection.',
    codeSnippet: `const ws = new WebSocket('wss://example.com');
ws.onmessage = event => console.log(event.data);
ws.send('Hello Server!');`
  },
  {
    slug: 'web-notifications',
    title: 'Web Notifications',
    summary: 'System notifications.',
    description: 'The Notifications API enables web apps to display system notifications to the user.',
    codeSnippet: `Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    new Notification('Hello!', { body: 'This is a notification' });
  }
});`
  },
  {
    slug: 'web-payments',
    title: 'Web Payments API',
    summary: 'Payment processing.',
    description: 'The Payment Request API standardizes the payment checkout process in web applications.',
    codeSnippet: `const request = new PaymentRequest(
  [{ supportedMethods: 'basic-card' }],
  { total: { label: 'Total', amount: { currency: 'USD', value: '10.00' }}}
);`
  },
  {
    slug: 'web-midi',
    title: 'Web MIDI API',
    summary: 'MIDI device interaction.',
    description: 'The Web MIDI API enables web applications to interact with MIDI musical instruments.',
    codeSnippet: `navigator.requestMIDIAccess()
  .then(access => {
    for (let input of access.inputs.values()) {
      input.onmidimessage = message => console.log(message.data);
    }
  });`
  },
  {
    slug: 'web-authentication',
    title: 'Web Authentication',
    summary: 'Passwordless authentication.',
    description: 'The Web Authentication API enables strong authentication with public key cryptography.',
    codeSnippet: `navigator.credentials.create({
  publicKey: {
    challenge: new Uint8Array(32),
    rp: { name: 'Example Site' },
    user: { id: new Uint8Array(16), name: 'john.doe@example.com' }
  }
});`
  },
  {
    slug: 'web-animations',
    title: 'Web Animations API',
    summary: 'Programmatic animations.',
    description: 'The Web Animations API provides control over browser animations.',
    codeSnippet: `element.animate([
  { transform: 'scale(1)' },
  { transform: 'scale(1.5)' }
], {
  duration: 1000,
  iterations: Infinity
});`
  },
  {
    slug: 'web-audio',
    title: 'Web Audio API',
    summary: 'Advanced audio processing.',
    description: 'The Web Audio API provides a powerful system for controlling audio on the web.',
    codeSnippet: `const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.start();`
  },
  {
    slug: 'web-speech',
    title: 'Web Speech API',
    summary: 'Speech recognition and synthesis.',
    description: 'The Web Speech API enables you to incorporate voice data into web apps.',
    codeSnippet: `const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance('Hello World');
synth.speak(utterance);`
  },
  {
    slug: 'web-crypto',
    title: 'Web Crypto API',
    summary: 'Cryptographic operations.',
    description: 'The Web Crypto API provides cryptographic functionality for web applications.',
    codeSnippet: `const data = new TextEncoder().encode('Hello');
crypto.subtle.digest('SHA-256', data)
  .then(hash => console.log(new Uint8Array(hash)));`
  },
  {
    slug: 'web-locks',
    title: 'Web Locks API',
    summary: 'Resource coordination.',
    description: 'The Web Locks API allows web apps to coordinate the use of resources.',
    codeSnippet: `navigator.locks.request('resource_name', async lock => {
  // Critical section
  await doSomething();
});`
  },
  {
    slug: 'web-rtc',
    title: 'WebRTC',
    summary: 'Real-time communication.',
    description: 'WebRTC enables real-time communication of audio, video, and data in web apps.',
    codeSnippet: `const pc = new RTCPeerConnection();
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => pc.addTrack(stream.getVideoTracks()[0]));`
  },
  {
    slug: 'web-audio',
    title: 'Web Audio API',
    summary: 'Audio processing.',
    description: 'The Web Audio API provides a powerful system for controlling audio on the web.',
    codeSnippet: `const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.start();`
  },
  {
    slug: 'web-serial',
    title: 'Web Serial API',
    summary: 'Serial port communication.',
    description: 'The Web Serial API provides a way to read and write data to serial devices through USB ports.',
    codeSnippet: `navigator.serial.requestPort()
  .then(port => port.open({ baudRate: 9600 }))
  .then(port => console.log('Connected to serial port'));`
  },
  {
    slug: 'web-nfc',
    title: 'Web NFC',
    summary: 'NFC tag interaction.',
    description: 'The Web NFC API enables web apps to read and write to NFC tags when they are in close proximity.',
    codeSnippet: `const ndef = new NDEFReader();
await ndef.scan();
ndef.onreading = ({ message }) => {
  console.log(message);
};`
  }
];
console.log(tips.length);
tips.forEach(tip => {
  console.log(tip.slug);
});
const slugs = tips.map(tip => tip.slug);
const uniqueSlugs = [...new Set(slugs)];
console.log(uniqueSlugs.length);
// Find duplicate slugs and their indices
slugs.forEach((slug, index) => {
  const firstIndex = slugs.indexOf(slug);
  if (firstIndex !== index) {
    console.log(`Duplicate found: "${slug}" at indices ${firstIndex} and ${index}`);
  }
});

