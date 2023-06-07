# Kumba React task

``` 
npm install 
npm start
```

Would be nice:
1. add loaders and disable controllers while loading is active
2. move logic of each steps to higher level, for example move `submit` from `StepDate` to `Steps`

Which test would I write: 
1. UI - compare step number with displayed content
2. 1st step triggers request to `/me`
3. 2nd step - button `Submit` triggers request to `/submit`
4. Response to `/submit` with 200 trigger switch to last step
