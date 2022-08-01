const express = require("express")
const app = express()

// call model for member
const chekup = require("../models/index").chekup

// *** call auth ***
// panggil fungsi auth -> validasi token
// const { auth } = require("./login")

// fungsi auth dijadikan middleware
// app.use(auth)
// ---------------------------------

// middleware for allow the request from body (agar bisa membaca data yg dibody)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// end-point akses data member dg method GET
app.get("/", async(req, res) => {
    chekup.findAll()
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({
                message: "Invalid request"
            })
        })
})

// end-point akses data chekup berdasarkan 'id' tertentu dg method GET
app.get("/:id", async(req, res) => {
    chekup.findOne({ where: { id: req.params.id } })
        .then(chekup => {
            res.json(chekup)
        })
        .catch(error => {
            res.json({ message: "Invalid request" })
        })
})

// end-point add new chekup
app.post("/", async(req, res) => {
    // tampung data request yg akan dimasukkan
    let newChekup = {
        nama: req.body.nama,
        identity_number: req.identity_number,
        address: req.body.address,
        complaint: req.body.complaint,
        phone_number: req.body.phone_number,
        status: "WAITING"
    }

    // execute insert new chekup
    chekup.create(newChekup)
        .then(result => {
            res.json({
                message: "Data Success",
                data: result
            })
        })
        .catch(error => {
            res.json({
                message: "Invalid request"
            })
        })
})

// end-point mengubah data chekup dg method PUT
app.put("/", async(req, res) => {
    // key yg menunjukkan data yg akan diubah
    let param = {
        id: req.body.id
    }

    // tampung data request yg akan diubah
    let data = {
        nama: req.body.nama,
        identity_number: req.identity_number,
        address: req.body.address,
        complaint: req.body.complaint,
        phone_number: req.body.phone_number,
        status: "WAITING"
    }

    // execute update data
    chekup.update(data, { where: param })
        .then(result => {
            res.json({
                message: "Data Updated",
                data: result
            })
        })
        .catch(error => {
            res.json({
                message: "Data not found"
            })
        })
})

// end-point menghapus data chekup berdasarkan 'id' dg method DELETE
app.delete("/:id", async(req, res) => {
    // tampung data yg akan dihapus
    let param = {
        id: req.params.id
    }

    // execute delete data
    chekup.destroy({ where: param })
        .then(result => {
            res.json({
                message: "Data Deleted"
            })
        })
        .catch(error => {
            res.json({
                message: "Invalid request"
            })
        })
})

module.exports = app