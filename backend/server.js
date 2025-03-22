import express from 'express';

const app = express();

app.get('/', (req, res)=>{
     res.send('Server is ready');
});

app.get('/api/jokes', (req, res)=>{
      const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'A curious joke',
            content: 'This is a  curious joke'
        },
        {
            id: 3,
            title: 'A funny joke',
            content: 'This is a funny joke'
        },
        {
            id: 4,
            title: 'A  thriller joke',
            content: 'This is a thriller joke'
        },
        {
            id: 5,
            title: 'A  waste joke',
            content: 'This is a waste joke'
        },
        

      ];
      res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
});