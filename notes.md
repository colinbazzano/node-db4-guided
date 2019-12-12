# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## Samuel's Project: Bug Tracker

`Admin` can assign a `ticket` to an `employee` with priority.

Employee sees teh ticket (notified by email).

> software development is a game of abstraction

## A Good Data Model (🚨 Opinion Alert 🚨)

- Captures ALL the data needed by the system
- Captures ONLY the data needed by the system
- Reflects realite (from the point of view of the system)
- is flexible (can evolve with the needs of the system)
- Guarantee data integrity (without sacraficing too much performance)
- is driven by the way we access the data

## Components

- Entities (resources) : nouns --> tables
- Properties (column, fields, attributes) --> columns
- Relationships --> foreign keys

## Workflow

- Identify entities (resources): nouns --> tables
- Identify relationships --> foreign keys
- Identify properties (column, fields, attributes) --> columns

## Relationships

- One to One: rare
- One to Many: this is the most common type
- Many to Many: smoke and mirrors, a trick!

## Mantras

- Every table must have a `Primary Key` (PK)
- Work on **two or three** entities at a time
- _One to many_ relationship requires a `Foreign Key`
- The `FK` goes on the **many** side
- _many to many_ requires a **third table**
- The third table can have other columns
