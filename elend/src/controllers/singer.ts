import {
  CreateSingerDTO,
  deleteSingerDTO,
  SingerModel,
  getSingerByIdDTO,
  UpdateSingerDTO,
} from "../models/singer";

export const getAllSingers = async () => {
  try {
    return await SingerModel.find();
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const getSingerById = async ({ _id }: getSingerByIdDTO) => {
  try {
    return await SingerModel.findById(_id);
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const createSinger = async ({
  stageName,
  name,
  lastName,
  nationality,
}: CreateSingerDTO) => {
  if (!name)
    return {
      status: 400,
      error: "name is required",
    };
  if (!lastName)
    return {
      status: 400,
      error: "lastName is required",
    };
  if (!nationality)
    return {
      status: 400,
      error: "nationality is required",
    };
  if (!stageName)
    return {
      status: 400,
      error: "stageName is required",
    };

  try {
    return await SingerModel.create({
      stageName,
      name,
      lastName,
      nationality,
    });
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const updateSinger = async ({
  _id,
  ...updatedParams
}: UpdateSingerDTO) => {
  if (!_id)
    return {
      status: 400,
      error: "_id is required",
    };

  try {
    return await SingerModel.findByIdAndUpdate(_id, updatedParams, {
      new: true,
    });
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};

export const deleteSinger = async ({ _id }: deleteSingerDTO) => {
  if (!_id)
    return {
      status: 400,
      error: "_id is required",
    };

  try {
    return await SingerModel.findByIdAndDelete(_id, {
      new: true,
    });
  } catch (err) {
    return {
      status: 500,
      error: err,
    };
  }
};
