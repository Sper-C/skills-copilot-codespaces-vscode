// Create web server



// Import modules
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { Comment } = require('../models/comment');
const { User } = require('../models/user');
const { Post } = require('../models/post');
const { auth } = require('../middleware/auth');


