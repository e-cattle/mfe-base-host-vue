# mfe-base-host

ThIn this template, all libraries and plugins are installed, as well as all configurations necessary for building a micro-frontend application with all the features of a PWA. The `host` template comes with a component for accrediting the application in the BigBoxx middleware, to allow access to the sensory data collected by the e-Cattle platform.

## 👩🏿‍💻 Configurações

You will only need to change anything in the `host` application if you add a `remote` application. In that case, you will need to include `remote` in the `config.federation.js` file of the `host` application.

You must change the `config.federation.js` file in the `host` application. Just include the component name and the address of the `remoteEntry.js` that was exposed in the `remote`. Assuming the name is `ExposedRemoteComponent` and the path `https://localhost:5005/assets/remoteEntry.js`, the `config.federation.js` of the `host` would look like this:

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
git clone https://github.com/e-cattle/mfe-base.git
```

```bash
git checkout -b feature/NAME
```

Finally, open a Pull Request explaining the problem solved or the functionality added. If there is one, add screenshots of the visual changes and wait for the review!

[Como criar uma Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request) |
[Padrão de Commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

## Licença 📃

This project is licensed under the [MIT](./../LICENSE) license.
