import {
  CreateGenreDTO,
  deleteGenreDTO,
  GenreModel,
  getGenreByIdDTO,
  UpdateGenreDTO,
} from "../models/genre";

export const getAllGenres = async () => {
  return await GenreModel.find();
};

export const getGenreById = async ({ _id }: getGenreByIdDTO) => {
  return await GenreModel.findById(_id);
};

export const createGenre = async ({ description }: CreateGenreDTO) => {
  if (!description)
    return {
      status: 400,
      error: "description is required",
    };

  return await GenreModel.create({
    description,
  });
};

export const updateGenre = async ({ _id, description }: UpdateGenreDTO) => {
  if (!_id)
    return {
      status: 400,
      error: "_id is required",
    };

  if (!description)
    return {
      status: 400,
      error: "description is required",
    };

  return await GenreModel.findByIdAndUpdate(
    _id,
    {
      description,
    },
    {
      new: true,
    }
  );
};

export const deleteGenre = async ({ _id }: deleteGenreDTO) => {
  if (!_id)
    return {
      status: 400,
      error: "_id is required",
    };

  return await GenreModel.findByIdAndDelete(_id, {
    new: true,
  });
};
