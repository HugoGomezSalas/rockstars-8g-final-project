import {
  CreateSongDTO,
  deleteSongDTO,
  SongModel,
  getSongByIdDTO,
  UpdateSongDTO,
} from "../models/song";

export const getAllSongs = async () => {
  try {
    return await SongModel.find().populate("singer");
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const getSongById = async ({ _id }: getSongByIdDTO) => {
  try {
    return await SongModel.findById(_id).populate("singer");
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const createSong = async ({
  name,
  singer,
  album,
  price,
}: CreateSongDTO) => {
  if (!name)
    return {
      status: 400,
      error: "name is required",
    };
  if (!singer)
    return {
      status: 400,
      error: "singer is required",
    };
  if (!price)
    return {
      status: 400,
      error: "price is required",
    };

  try {
    return await SongModel.create({
      name,
      album,
      singer,
      duration: 60,
      releaseDate: new Date(),
      completeFile: "path",
      previewFile: "path",
    });
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const updateSong = async ({ _id, ...updatedParams }: UpdateSongDTO) => {
  if (!_id)
    return {
      status: 400,
      error: "_id is required",
    };

  try {
    return await SongModel.findByIdAndUpdate(_id, updatedParams, {
      new: true,
    });
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const deleteSong = async ({ _id }: deleteSongDTO) => {
  if (!_id)
    return {
      status: 400,
      error: "_id is required",
    };

  try {
    return await SongModel.findByIdAndDelete(_id, {
      new: true,
    });
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};
