exports.up = function(knex) {
  return knex.schema
    .createTable("roles", tbl => {
      tbl.increments();
      tbl
        .string("name", 255)
        .notNullable()
        .unique();
    })
    .createTable("employees", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      // Foreign Key
      tbl
        .integer("role_id")
        .unsigned() // cannot be negative
        .notNullable()
        .references("id") // this is part 1 of FK
        .inTable("roles") // part 2 of FK
        .onDelete("RESTRICT") // CASCADE, RESTRICT, DO NOTHING, SET NULL
        .onUpdate("CASCADE");
    })
    .createTable("tickets", tbl => {
      tbl.increments();
      tbl.string("description", 255).notNullable();
    })
    .createTable("employee_tickets", tbl => {
      tbl.primary(["ticket_id", "employee_id"]); // this instead of tbl.increments(); ties the two to the 'primary key' of the employee_tickets table
      tbl
        .integer("ticket_id")
        .unsigned() // cannot be negative
        .notNullable()
        .references("id") // this is part 1 of FK
        .inTable("tickets"); // part 2 of FK
      tbl
        .integer("employee_id")
        .unsigned() // cannot be negative
        .notNullable()
        .references("id") // this is part 1 of FK
        .inTable("employees"); // part 2 of FK
    });
};

exports.down = function(knex) {};
