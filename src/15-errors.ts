try {
  throw null;
  throw "";
  throw [{ a: [] }];
} catch (error: unknown) {
  console.error(getErrorMessage(error));
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }
  //...
}
