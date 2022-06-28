

export default {
  "meta": {},
  "id": "_default",
  "module": () => import('../src/routes/_module.svelte'),
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {
        "dynamic": true
      },
      "id": "_default_____fallback__svelte",
      "name": "[...fallback]",
      "module": () => import('../src/routes/[...fallback].svelte'),
      "file": {
        "path": "src/routes/[...fallback].svelte",
        "dir": "src/routes",
        "base": "[...fallback].svelte",
        "ext": ".svelte",
        "name": "[...fallback]"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_folder",
      "name": "folder",
      "module": false,
      "file": {
        "path": "src/routes/folder",
        "dir": "src/routes",
        "base": "folder",
        "ext": "",
        "name": "folder"
      },
      "children": [
        {
          "meta": {
            "dynamic": true
          },
          "id": "_default_folder__folder__svelte",
          "name": "[folder]",
          "module": () => import('../src/routes/folder/[folder].svelte'),
          "file": {
            "path": "src/routes/folder/[folder].svelte",
            "dir": "src/routes/folder",
            "base": "[folder].svelte",
            "ext": ".svelte",
            "name": "[folder]"
          },
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_index_svelte",
      "name": "index",
      "module": () => import('../src/routes/index.svelte'),
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "children": []
    }
  ]
}