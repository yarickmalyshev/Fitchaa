import User from "../models/user.js";
import Business from "../models/business.js"
import Admin from "../models/admin.js";
import Place from "../models/place.js";
import Post from "../models/post.js";

class PostController {
    async createUser(req, res) {
        try {

            const {login,number,subscribe} = req.body

            const unLogin = await User.findOne({login})
            if (unLogin) {
                return res.status(400).json({message: "Пользователь с указанным логином уже зарегистрирован"})

            }
            const user = await User.create({
                login,
                number,
                subscribe
            })
            return res.json(user)


        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Пользователь не найден в базе данных сервера'})
            }
            const user = await User.findById(id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async createBusiness(req, res) {
        try {

            const {login,number,subscribe} = req.body

            const unLogin = await Business.findOne({login})
            if (unLogin) {
                return res.status(400).json({message: "Пользователь с указанным логином уже зарегистрирован"})

            }
            const business = await Business.create({
                login,
                number,
                subscribe
            })
            return res.json(business)


        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOneB(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Пользователь не найден в базе данных сервера'})
            }
            const business = await Business.findById(id)
            return res.json(business)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async createAdmin(req, res) {
        try {

            const {login,number,admin} = req.body

            const unLogin = await Admin.findOne({login})
            if (unLogin) {
                return res.status(400).json({message: "Пользователь с указанным логином уже зарегистрирован"})

            }
            const adm = await Admin.create({
                login,
                number,
                admin
            })
            return res.json(adm)


        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOneA(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Пользователь не найден в базе данных сервера'})
            }
            const adm = await Admin.findById(id)
            return res.json(adm)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async createPlace(req, res) {
        try {

            const {id,grade,title,name} = req.body

            const unLogin = await Place.findOne({id})
            if (unLogin) {
                return res.status(400).json({message: "Место с указанным id уже зарегистрирован"})

            }
            const place = await Place.create({
                id,
                grade,
                title,
                name
            })
            return res.json(place)


        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOnePl(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Место не найдено в базе данных сервера'})
            }
            const place = await Place.findById(id)
            return res.json(place)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async createPost(req, res) {
        try {

            const {title,counter,creatorId} = req.body
            const place = await Post.create({
                title,
                counter,
                creatorId
            })
            return res.json(place)


        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOnePo(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Пост не найден в базе данных сервера'})
            }
            const place = await Post.findById(id)
            return res.json(place)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async createEvent(req, res) {
        try {

            const {date,name,title} = req.body
            const place = await Post.create({
                date,
                name,
                title
            })
            return res.json(place)


        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOneE(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Событие не найдено в базе данных сервера'})
            }
            const place = await Post.findById(id)
            return res.json(place)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()