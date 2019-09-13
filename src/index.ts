import express from 'express';

const app = express();
const port = process.env.PORT || 3555;
const mockResponse = {
  foo: 'bar',
  bar: 'foo',
};

const chirp = (yo: number): void => {
  const a = 2 - yo;

  const b = 5 + yo;
  console.log(yo);
};

app.get('/api', (req, res) => {
  console.log('yo');
  res.send(mockResponse);
});
app.get('/', (req, res) => {
  const arr = 'f';
  chirp(arr);
  console.log('yo');
  res.send(mockResponse);
});
app.listen(port, function() {
  console.log(`App listening on port: ${port}`);
});
