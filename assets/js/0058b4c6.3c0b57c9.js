"use strict";(self.webpackChunkelcengine=self.webpackChunkelcengine||[]).push([[849],{6164:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docSidebar":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/docs/getting-started/installation","docId":"getting-started/installation","unlisted":false},{"type":"link","label":"Creating a Connection","href":"/docs/getting-started/creating-a-connection","docId":"getting-started/creating-a-connection","unlisted":false},{"type":"link","label":"Listening to Connection Events","href":"/docs/getting-started/listening-to-connection-events","docId":"getting-started/listening-to-connection-events","unlisted":false},{"type":"link","label":"Create a Schema","href":"/docs/getting-started/create-a-schema","docId":"getting-started/create-a-schema","unlisted":false},{"type":"link","label":"Create a Model","href":"/docs/getting-started/create-a-model","docId":"getting-started/create-a-model","unlisted":false}],"href":"/docs/category/getting-started"},{"type":"category","label":"Basic Queries","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Find","href":"/docs/queries/find","docId":"queries/find","unlisted":false}],"href":"/docs/category/basic-queries"},{"type":"category","label":"Querybuilder","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Skip","href":"/docs/querybuilder/skip","docId":"querybuilder/skip","unlisted":false},{"type":"link","label":"Limit","href":"/docs/querybuilder/limit","docId":"querybuilder/limit","unlisted":false},{"type":"link","label":"Paginate","href":"/docs/querybuilder/paginate","docId":"querybuilder/paginate","unlisted":false}],"href":"/docs/category/querybuilder"},{"type":"category","label":"Middleware","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"LifeCycle Hooks","href":"/docs/middleware/lifecycle-hooks","docId":"middleware/lifecycle-hooks","unlisted":false},{"type":"link","label":"Filter Query","href":"/docs/middleware/filter-query","docId":"middleware/filter-query","unlisted":false}],"href":"/docs/category/middleware"},{"type":"category","label":"Triggers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Document Insert","href":"/docs/triggers/document-insert","docId":"triggers/document-insert","unlisted":false},{"type":"link","label":"Document Update","href":"/docs/triggers/document-update","docId":"triggers/document-update","unlisted":false},{"type":"link","label":"Document Replace","href":"/docs/triggers/document-replace","docId":"triggers/document-replace","unlisted":false},{"type":"link","label":"Document Delete","href":"/docs/triggers/document-delete","docId":"triggers/document-delete","unlisted":false},{"type":"link","label":"Collection Drop","href":"/docs/triggers/collection-drop","docId":"triggers/collection-drop","unlisted":false}],"href":"/docs/category/triggers"},{"type":"category","label":"Transactions","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Single Data Source","href":"/docs/transactions/single-data-source","docId":"transactions/single-data-source","unlisted":false},{"type":"link","label":"Multiple Data Sources","href":"/docs/transactions/multiple-data-source","docId":"transactions/multiple-data-source","unlisted":false}],"href":"/docs/category/transactions"},{"type":"category","label":"Indexing","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Creating Indexes","href":"/docs/indexing/creating-indexes","docId":"indexing/creating-indexes","unlisted":false},{"type":"link","label":"Syncing Indexes","href":"/docs/indexing/syncing-indexes","docId":"indexing/syncing-indexes","unlisted":false}],"href":"/docs/category/indexing"},{"type":"category","label":"Plugins","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Filter Query","href":"/docs/plugins/filter-query","docId":"plugins/filter-query","unlisted":false}],"href":"/docs/category/plugins"}]},"docs":{"getting-started/create-a-model":{"id":"getting-started/create-a-model","title":"Create a Model","description":"Model creation is a part of the elemental core package which can be imported as follows:","sidebar":"docSidebar"},"getting-started/create-a-schema":{"id":"getting-started/create-a-schema","title":"Create a Schema","description":"Schema creation is a part of the elemental core package which can be imported as follows:","sidebar":"docSidebar"},"getting-started/creating-a-connection":{"id":"getting-started/creating-a-connection","title":"Creating a Connection","description":"All Connections in Elemental are managed by the e_connection package which can be imported as follows:","sidebar":"docSidebar"},"getting-started/installation":{"id":"getting-started/installation","title":"Installation","description":"Get started by creating a new project and installing Elemental.","sidebar":"docSidebar"},"getting-started/listening-to-connection-events":{"id":"getting-started/listening-to-connection-events","title":"Listening to Connection Events","description":"Elemental provides a way to listen to connection pool events such as ConnectionCreated, ConnectionReady, and ConnectionClosedin a much more user-friendly way.","sidebar":"docSidebar"},"indexing/creating-indexes":{"id":"indexing/creating-indexes","title":"Creating Indexes","description":"Indexes can be defined within a Schema under the Index field. This field accepts the original MongoDB index options under the options.IndexOptions type.","sidebar":"docSidebar"},"indexing/syncing-indexes":{"id":"indexing/syncing-indexes","title":"Syncing Indexes","description":"Indexes can by manually synced with the database using the SyncIndexes method in a model. This method will create any indexes that are defined in the schema but do not exist in the database as well as remove any indexes that exist in the database but are not defined in the schema.","sidebar":"docSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Elemental is an Object Document Mapper (ODM) for Golang and MongoDB. It is designed to address your pain points when working with the plain MongoDB Go driver.","sidebar":"docSidebar"},"middleware/filter-query":{"id":"middleware/filter-query","title":"Filter Query","description":"The filter query is a special type of middleware which allows you to transform a specially crafted RESTful query into a MongoDB query. This middleware is extremely useful when building RESTful APIs with Elemental.","sidebar":"docSidebar"},"middleware/lifecycle-hooks":{"id":"middleware/lifecycle-hooks","title":"LifeCycle Hooks","description":"Elemental provides a way to inject custom logic into the lifecycle of a model. This is done by defining middleware functions that are executed at specific points in the lifecycle of a model.","sidebar":"docSidebar"},"plugins/filter-query":{"id":"plugins/filter-query","title":"Filter Query","description":"","sidebar":"docSidebar"},"queries/find":{"id":"queries/find","title":"Find","description":"The find query is used to retrieve a list of records from a collection. It is the most common query used in the database.","sidebar":"docSidebar"},"querybuilder/limit":{"id":"querybuilder/limit","title":"Limit","description":"The limit method allows you to limit the number of documents returned in a collection.","sidebar":"docSidebar"},"querybuilder/paginate":{"id":"querybuilder/paginate","title":"Paginate","description":"Pagination is a common requirement for many applications. Elemental provides a simple way to paginate query results using the Paginate method on the query object.","sidebar":"docSidebar"},"querybuilder/skip":{"id":"querybuilder/skip","title":"Skip","description":"The skip method allows you to skip a specified number of documents in a collection.","sidebar":"docSidebar"},"transactions/multiple-data-source":{"id":"transactions/multiple-data-source","title":"Multiple Data Sources","description":"Elemental aims to provide a mechanism for using transactions across multiple data sources. While this is not yet developed, it is on the roadmap for future releases.","sidebar":"docSidebar"},"transactions/single-data-source":{"id":"transactions/single-data-source","title":"Single Data Source","description":"Elemental provides a more user friendly interface for using database transactions compared to the driver by taking care of session management.","sidebar":"docSidebar"},"triggers/collection-drop":{"id":"triggers/collection-drop","title":"Collection Drop","description":"The Model.OnCollectionDrop method allows you to listen to when the collection corresponding to the model is dropped in the database.","sidebar":"docSidebar"},"triggers/document-delete":{"id":"triggers/document-delete","title":"Document Delete","description":"The Model.OnDelete method allows you to listen to when a document corresponding to the model is deleted in the database.","sidebar":"docSidebar"},"triggers/document-insert":{"id":"triggers/document-insert","title":"Document Insert","description":"Triggers or Change Streams as they are known in MongoDB are a way to listen to changes in the database and react to them. Elemental abstracts this concept and integrates it directly into the model you create.","sidebar":"docSidebar"},"triggers/document-replace":{"id":"triggers/document-replace","title":"Document Replace","description":"The Model.OnReplace method allows you to listen to when a document corresponding to the model is replaced in the database.","sidebar":"docSidebar"},"triggers/document-update":{"id":"triggers/document-update","title":"Document Update","description":"The Model.onUpdate method allows you to listen to when a document corresponding to the model is updated in the database.","sidebar":"docSidebar"}}}}')}}]);