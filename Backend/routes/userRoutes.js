const express = require('express')
const router = express.Router()
const {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  patchUser,
  deleteUser
} = require('../Contollers/userController')

// GET all users
router.get('/', getUsers)

// GET single user
router.get('/:id', getUserById)

// POST new user
router.post('/', createUser)

// PUT update user (full)
router.put('/:id', updateUser)

// PATCH update user (partial)
router.patch('/:id', patchUser)

// DELETE user
router.delete('/:id', deleteUser)

module.exports = router

