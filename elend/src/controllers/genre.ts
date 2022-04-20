import {
  CreateGenreDTO,
  deleteGenreDTO,
  GenreModel,
  getGenreByIdDTO,
  UpdateGenreDTO,
} from "../models/genre";

export const getAllGenres = async () => {
  try {
    return await GenreModel.find();
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const getGenreById = async ({ _id }: getGenreByIdDTO) => {
  try {
    return await GenreModel.findById(_id);
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const createGenre = async ({ description }: CreateGenreDTO) => {
  if (!description)
    return {
      status: 400,
      error: "description is required",
    };
  try {
    return await GenreModel.create({
      description,
    });
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
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

  try {
    return await GenreModel.findByIdAndUpdate(
      _id,
      {
        description,
      },
      {
        new: true,
      }
    );
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const deleteGenre = async ({ _id }: deleteGenreDTO) => {
  if (!_id)
    return {
      status: 400,
      error: "_id is required",
    };

  try {
    return await GenreModel.findByIdAndDelete(_id, {
      new: true,
    });
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};
