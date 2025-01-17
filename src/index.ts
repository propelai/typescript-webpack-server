import express from 'express';

const app = express();
const port = process.env.PORT || 3555;
const mockResponse = {
  foo: 'bar',
  bar: 'foo',
};

const chirp = (note: string): void => {
  console.log(note);
};

app.get('/api', (req, res) => {
  console.log('yo');
  res.send(mockResponse);
});
app.get('/', (req, res) => {
  chirp('Hello World');
  res.send(mockResponse);
});
app.listen(port, function() {
  console.log(`App listening on port: ${port}`);
});
