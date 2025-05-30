# mfe-base-host

This is a template with a Base application, which is the starting point for initiating the other `host` and `remote` applications. In addition, a `host` template will also be cloned. In this template, all libraries and plugins are installed, as well as all configurations necessary for building a micro-frontend application with all the features of a PWA. The `host` template comes with a component for accrediting the application in the BigBoxx middleware, to allow access to the sensory data collected by the e-Cattle platform.

## 👩🏿‍💻 Configurações

**For this project, it is not necessary to make changes to the `package.json` of the Base application.**

It will only be necessary to change the `package.json` of the Base application if a `remote` application is added. In this case, in addition to the changes to `package.json`, it will also be necessary to include `remote` in the `config.federation.js` file in the `host` application.

Let's start with the changes to the `package.json` of the Base application. In the `workspaces` you will need to include the name of the `remote` application, for example, `remote_app` preceded by `.\`. You must also include the port on which the `remote` runs in `stop`. See below:

```json
{
  "name": "base",
  "version": "1.0.0",
  "workspaces": ["./host_app", "./remote_app"],
  "scripts": {
    "dev:host_app": "npm run -w host_app dev",
    "dev:remote_app": "npm run -w remote_app dev",
    "dev": "run-p dev:*",
    "build:host_app": "npm run -w host_app build && npm run -w host_app preview",
    "build:remote_app": "npm run -w remote_app build && npm run -w remote_app preview",
    "build": "npm-run-all --parallel build:*",
    "preview": "npm run build --workspaces --if-present",
    "serve": "npm run serve --workspaces --if-present",
    "stop": "kill-port --port 4173,5005"
  },
  "devDependencies": {
    "@originjs/vite-plugin-federation": "^1.3.5",
    "kill-port": "^2.0.1",
    "npm-run-all": "^4.1.5"
  }
}
```

Once this is done, you must change the `config.federation.js` file in the `host` application. Just include the component name and the address of the `remoteEntry.js` that was exposed in the `remote`. Assuming the name is `ExposedRemoteComponent` and the path `https://localhost:5005/assets/remoteEntry.js`, the `config.federation.js` of the `host` would look like this:

```javascript
export default {
  name: "app",
  remotes: {
    // Exemplo de declaração de um remote na aplicação host
    ExposedRemoteComponent: "https://localhost:5005/assets/remoteEntry.js",
  },
  shared: ["vue", "vuetify", "axios", "core-js", "pinia", "vue-router"],
};
```

From there, the `remote` component(s) can be used on the `host`. Example of using the component named `ExposedRemoteComponent` being used on the `host`, both using the Vue.js framework:

```javascript
<template>
  <ExposedRemoteComponent v-if="!!ExposedRemoteComponent" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const ExposedRemoteComponent = defineAsyncComponent(
  () => import('remote_app/ExposedRemoteComponent')
)
</script>
```

## Contribute 🚀

If you want to contribute, clone this repository, create your own working branch and get to work!

```bash
git clone https://github.com/e-cattle/mfe-base-host-vue.git
```

```bash
git checkout -b feature/NAME
```

Finally, open a Pull Request explaining the problem solved or the functionality added. If there is one, add screenshots of the visual changes and wait for the review!

[Como criar uma Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request) |
[Padrão de Commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

## Licença 📃

This project is licensed under the [MIT](./../LICENSE) license.
