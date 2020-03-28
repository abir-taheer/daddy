const router = require("express").Router();
const defaultHandler = require("./default");

router.use(defaultHandler);

router.get("/", (req, res, next) => {
	req.og.title = "Home | Quicker Picker Upper";
	req.og.description = "This is the home page...";
	next();
});

// Other routes go here


// --- End other routes ---

// Be able to print the open graph data if requested
// MAKE SURE THIS HANDLER GOES AT THE VERY END
router.get("*", (req, res, next) => {
	if( typeof req.query.printOG !== "undefined" ){
		res.json(req.og);
	} else {
		next();
	}
});

module.exports = router;
