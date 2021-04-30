'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('habits', {
    id: {
      type: 'int',
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    trigger: {
      type: 'string',
      notNull: true,
    },
    behavior: {
      type: 'string',
      notNull: true,
    },
    reward: {
      type: 'string',
      notNull: true,
    },

    user_id: {
      type: 'string',
      notNull: true,
    },

    created_at: {
      type: 'timestamp',
      notNull: true,
      defaultValue: new String('now()'),
    },

    updated_at: {
      type: 'timestamp',
      notNull: true,
      defaultValue: new String('now()'),
    },
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('habits', callback);
};

exports._meta = {
  "version": 1
};
