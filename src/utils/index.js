/* eslint-disable camelcase */
const mapAlbumDBToModel = ({ 
    id,
    name,
    year,
    created_at,
    updated_at,
  }) => ({
    id,
    name,
    year,
    createdAt: created_at,
    updatedAt: updated_at,
  });
  
  const mapSongDBToModel = ({ 
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
    created_at,
    updated_at,
  }) => ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
    createdAt: created_at,
    updatedAt: updated_at,
  });
  module.exports = { mapAlbumDBToModel, mapSongDBToModel };