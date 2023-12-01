const Movie = require('../models/movie.model');

exports.getMovies =async(req,res)=>{
    try {
        const movies= await Movie.find();
        return res.status(200).json(
            {
                message: "Consulta de películas",
                data:movies
            }

        );
        
    } catch (error) {
        return res.status(500).json(
            {
                message:"Error al consultar las películas",
                data:error
            }
        );
    }
}
exports.getMovieById =async(req,res)=>{
    const movieId=req.params.movieId;
    try {
        const movie=await Movie.findById(movieId);

        return res.status(200).json(
            {
                message:"Película con ID: "+movieId,
                data:movie
            }
        );
        
    } catch (error) {
        return res.status(500).json(
            {
                message:"Error al conultar la película",
                data:error
            }
        );
        }    
}

exports.newMovie =async(req,res)=>{
    try {
        const{titulo,director,isbn,genero,duracion,anho}=req.body;

        const newMovie =new Movie({titulo,director,isbn,genero,duracion,anho});

        await newMovie.save();
        return res.status(200).json(
            {
                message:"Película creada con éxito",
                data:newMovie
            }
        );
        
    } catch (error) {
        return res.status(500).json(
            {
                message:"Error al crear la película",
                data:error
            }
        );  
    }
}

exports.updateMovie =async(req,res)=>{
    const movieId=req.params.movieId;
    const newData=req.body;

    try {
        const updateMovie=await Movie.findByIdAndUpdate(movieId,newData,{new:true});


        return res.status(201).json(
            {
                message:"Actualizar película por ID: "+movieId,
                data:updateMovie
            }    
        );
        
    } catch (error) {
        return res.status(500).json(
            {
                message:"Error al actualizar la película",
                data:error
            }
        );      
    }
}

exports.deleteMovie =async(req,res)=>{
    const movieId=req.params.movieId;
    try {
        await Movie.findByIdAndRemove(movieId);
        return res.status(200).json(
            {
                message:"Película eliminada"
            }
        );
        
    } catch (error) {
        return res.status(500).json(
            {
                message:"Error al eliminar la película",
                data:error
            }
        );  
    }
}