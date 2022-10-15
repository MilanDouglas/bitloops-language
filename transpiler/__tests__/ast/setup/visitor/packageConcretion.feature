Feature: Repo Adapter
        Scenario: Valid Package Concretion
        Given A valid Package Concretion string
        When I generate the model
        Then I should get <output>

   # Examples: # @bitloops-auto-generated
       # | blString | output | @comments | @bitloops-auto-generated |
       # | const mongoConnection = RepoConnections.Mongo({     host: 'localhost',     port: 27017,     database: 'todo', }) | {   "repos": {     "connections": {       "mongoConnection": {         "dbType": "mongodb",         "host": {           "expression": {             "literal": {               "type": "string",               "value": "localhost"             }           }         },         "port": {           "expression": {             "literal": {               "type": "number",               "value": "27017"             }           }         },         "database": {           "expression": {             "literal": {               "type": "string",               "value": "todo"             }           }         }       }     }   } } | Test only repo connection | @bitloops-auto-generated |
       # | const mongoConnection = RepoConnections.Mongo({     host: 'localhost',     port: 27017,     database: 'todo', })   const todoRepo = RepoAdapters.Mongo({     connection: mongoConnection,     collection: 'todos',   }) concretes [Demo][Hello World]TodoRepoPort; | {   "repos": {     "connections": {       "mongoConnection": {         "dbType": "mongodb",         "host": {           "expression": {             "literal": {               "type": "string",               "value": "localhost"             }           }         },         "port": {           "expression": {             "literal": {               "type": "number",               "value": "27017"             }           }         },         "database": {           "expression": {             "literal": {               "type": "string",               "value": "todo"             }           }         }       }     },     "repoAdapters": {       "Demo": {         "Hello World": {           "todoRepo": {             "dbType": "mongodb",             "repoPort": "TodoRepoPort",             "connection": {               "expression": {                 "identifier": {                   "value": "mongoConnection"                 }               }             },             "collection": {               "expression": {                 "literal": {                   "type": "string",                   "value": "todos"                 }               }             }           }         }       }     }   } } | 1 connection & 1 adapter | @bitloops-auto-generated |
  
    Examples: # @bitloops-auto-generated
        | blString | output | @comments | @bitloops-auto-generated |
        | 99,111,110,115,116,32,109,111,110,103,111,67,111,110,110,101,99,116,105,111,110,32,61,32,82,101,112,111,67,111,110,110,101,99,116,105,111,110,115,46,77,111,110,103,111,40,123,10,32,32,32,32,104,111,115,116,58,32,39,108,111,99,97,108,104,111,115,116,39,44,10,32,32,32,32,112,111,114,116,58,32,50,55,48,49,55,44,10,32,32,32,32,100,97,116,97,98,97,115,101,58,32,39,116,111,100,111,39,44,10,125,41 | 123,10,32,32,34,114,101,112,111,115,34,58,32,123,10,32,32,32,32,34,99,111,110,110,101,99,116,105,111,110,115,34,58,32,123,10,32,32,32,32,32,32,34,109,111,110,103,111,67,111,110,110,101,99,116,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,34,100,98,84,121,112,101,34,58,32,34,109,111,110,103,111,100,98,34,44,10,32,32,32,32,32,32,32,32,34,104,111,115,116,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,34,108,105,116,101,114,97,108,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,116,121,112,101,34,58,32,34,115,116,114,105,110,103,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,118,97,108,117,101,34,58,32,34,108,111,99,97,108,104,111,115,116,34,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,34,112,111,114,116,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,34,108,105,116,101,114,97,108,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,116,121,112,101,34,58,32,34,110,117,109,98,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,118,97,108,117,101,34,58,32,34,50,55,48,49,55,34,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,34,100,97,116,97,98,97,115,101,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,34,108,105,116,101,114,97,108,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,116,121,112,101,34,58,32,34,115,116,114,105,110,103,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,118,97,108,117,101,34,58,32,34,116,111,100,111,34,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,125,10,125 | 84,101,115,116,32,111,110,108,121,32,114,101,112,111,32,99,111,110,110,101,99,116,105,111,110 | @bitloops-auto-generated |
        | 99,111,110,115,116,32,109,111,110,103,111,67,111,110,110,101,99,116,105,111,110,32,61,32,82,101,112,111,67,111,110,110,101,99,116,105,111,110,115,46,77,111,110,103,111,40,123,10,32,32,32,32,104,111,115,116,58,32,39,108,111,99,97,108,104,111,115,116,39,44,10,32,32,32,32,112,111,114,116,58,32,50,55,48,49,55,44,10,32,32,32,32,100,97,116,97,98,97,115,101,58,32,39,116,111,100,111,39,44,10,125,41,10,10,10,99,111,110,115,116,32,116,111,100,111,82,101,112,111,32,61,32,82,101,112,111,65,100,97,112,116,101,114,115,46,77,111,110,103,111,40,123,10,32,32,32,32,99,111,110,110,101,99,116,105,111,110,58,32,109,111,110,103,111,67,111,110,110,101,99,116,105,111,110,44,10,32,32,32,32,99,111,108,108,101,99,116,105,111,110,58,32,39,116,111,100,111,115,39,44,10,32,32,125,41,32,99,111,110,99,114,101,116,101,115,32,91,68,101,109,111,93,91,72,101,108,108,111,32,87,111,114,108,100,93,84,111,100,111,82,101,112,111,80,111,114,116,59 | 123,10,32,32,34,114,101,112,111,115,34,58,32,123,10,32,32,32,32,34,99,111,110,110,101,99,116,105,111,110,115,34,58,32,123,10,32,32,32,32,32,32,34,109,111,110,103,111,67,111,110,110,101,99,116,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,34,100,98,84,121,112,101,34,58,32,34,109,111,110,103,111,100,98,34,44,10,32,32,32,32,32,32,32,32,34,104,111,115,116,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,34,108,105,116,101,114,97,108,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,116,121,112,101,34,58,32,34,115,116,114,105,110,103,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,118,97,108,117,101,34,58,32,34,108,111,99,97,108,104,111,115,116,34,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,34,112,111,114,116,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,34,108,105,116,101,114,97,108,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,116,121,112,101,34,58,32,34,110,117,109,98,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,118,97,108,117,101,34,58,32,34,50,55,48,49,55,34,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,34,100,97,116,97,98,97,115,101,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,34,108,105,116,101,114,97,108,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,116,121,112,101,34,58,32,34,115,116,114,105,110,103,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,118,97,108,117,101,34,58,32,34,116,111,100,111,34,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,125,44,10,32,32,32,32,34,114,101,112,111,65,100,97,112,116,101,114,115,34,58,32,123,10,32,32,32,32,32,32,34,68,101,109,111,34,58,32,123,10,32,32,32,32,32,32,32,32,34,72,101,108,108,111,32,87,111,114,108,100,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,116,111,100,111,82,101,112,111,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,34,100,98,84,121,112,101,34,58,32,34,109,111,110,103,111,100,98,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,34,114,101,112,111,80,111,114,116,34,58,32,34,84,111,100,111,82,101,112,111,80,111,114,116,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,34,99,111,110,110,101,99,116,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,105,100,101,110,116,105,102,105,101,114,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,118,97,108,117,101,34,58,32,34,109,111,110,103,111,67,111,110,110,101,99,116,105,111,110,34,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,34,99,111,108,108,101,99,116,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,108,105,116,101,114,97,108,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,116,121,112,101,34,58,32,34,115,116,114,105,110,103,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,118,97,108,117,101,34,58,32,34,116,111,100,111,115,34,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,125,10,125 | 49,32,99,111,110,110,101,99,116,105,111,110,32,38,32,49,32,97,100,97,112,116,101,114 | @bitloops-auto-generated |
  