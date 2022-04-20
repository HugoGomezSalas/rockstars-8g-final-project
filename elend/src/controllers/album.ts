import {
  CreateAlbumDTO,
  deleteAlbumDTO,
  AlbumModel,
  getAlbumByIdDTO,
  UpdateAlbumDTO,
} from "../models/album";

export const getAllAlbums = async () => {
  try {
    return await AlbumModel.find()
      .populate("songs")
      .populate("singer")
      .populate("genre");
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const getAlbumById = async ({ _id }: getAlbumByIdDTO) => {
  try {
    return await AlbumModel.findById(_id)
      .populate("songs")
      .populate("singer")
      .populate("genre");
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const createAlbum = async ({
  name,
  genre,
  price,
  singer,
  songs,
  stock,
}: CreateAlbumDTO) => {
  if (!name)
    return {
      status: 400,
      error: "name is required",
    };
  if (!genre)
    return {
      status: 400,
      error: "genre is required",
    };
  if (!price)
    return {
      status: 400,
      error: "price is required",
    };
  if (!singer)
    return {
      status: 400,
      error: "singer is required",
    };
  if (!songs || songs.length === 0)
    return {
      status: 400,
      error: "songs is required",
    };
  if (!stock)
    return {
      status: 400,
      error: "stock is required",
    };
  try {
    return await AlbumModel.create({
      name,
      genre,
      price,
      singer,
      songs,
      stock,
      image: "path",
    });
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const updateAlbum = async ({
  _id,
  name,
  singer,
  songs,
  price,
  genre,
  releaseDate,
}: UpdateAlbumDTO) => {
  if (!_id)
    return {
      status: 400,
      error: "_id is required",
    };

  try {
    return await AlbumModel.findByIdAndUpdate(
      _id,
      {
        name,
        releaseDate,
        singer,
        songs,
        price,
        genre,
      },
      {
        new: true,
      }
    )
      .populate("songs")
      .populate("singer")
      .populate("genre");
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const deleteAlbum = async ({ _id }: deleteAlbumDTO) => {
  if (!_id)
    return {
      status: 400,
      error: "_id is required",
    };
  try {
    return await AlbumModel.findByIdAndDelete(_id, {
      new: true,
    })
      .populate("songs")
      .populate("singer")
      .populate("genre");
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};
