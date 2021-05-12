# Contributing with a new locale

1. First you have to add it in `languages.json` file as an object, having the same properties as other languages. For example:

```json
    "<localeCode>": {
        "languageName": "<languageFullName>",
        "components": {
            // Follow the pattern from the file
        },
        "app": {
            // Follow the pattern from the file
        }
    }
```

2. Go to `@/types/index.ts` and add locale code to the type called `supportedLocale` from that file

#### That's it, everything should be working now, if not please contact maintainers
