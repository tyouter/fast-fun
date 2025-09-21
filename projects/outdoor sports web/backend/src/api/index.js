/**
 * API主索引文件
 */

const express = require('express');
const v1Routes = require('./v1');

const router = express.Router();

// API版本控制
router.use('/v1', v1Routes);

module.exports = router;