class IndexController {
    getIndex(req, res) {
        res.send('Welcome to the Express Backend App!');
    }

    createResource(req, res) {
        // Logic to create a resource
        res.status(201).send('Resource created');
    }

    getResource(req, res) {
        // Logic to get a resource
        res.send('Resource details');
    }
}

export default IndexController;