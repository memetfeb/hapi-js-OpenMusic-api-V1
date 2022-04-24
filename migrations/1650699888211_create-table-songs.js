/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('songs', {
        id: {
          type: 'VARCHAR(50)',
          primaryKey: true,
        },
        title: {
          type: 'VARCHAR(47)',
          notNull: true,
        },
        year: {
          type: 'INTEGER',
          notNull: true,
        },
        genre: {
            type: 'VARCHAR(20)',
            notNull: true,
          },
          performer: {
            type: 'Varchar(30)',
            notNull: true,
          },
          duration: {
            type: 'INTEGER',
          },
          albumId: {
            type: 'VARCHAR(50)',
          },
        created_at: {
          type: 'TEXT',
          notNull: true,
        },
        updated_at: {
          type: 'TEXT',
          notNull: true,
        },
      });
};

exports.down = pgm => {
    pgm.dropTable('songs');
};
