    // Open IndexedDB database
var request = indexedDB.open('CommChatDB');

request.onsuccess = function(event) {
    var db = event.target.result;
    
    // Start a transaction
    var transaction = db.transaction(['conversations'], 'readwrite');
    var objectStore = transaction.objectStore('conversations');
    
    // Retrieve the record with the specified id
    var getRequest = objectStore.get('a0714270-0909-45f3-aa29-5a3e97ee6588');
    
    getRequest.onsuccess = function(event) {
        var record = event.target.result;
        
        // Check if the record is found
        if (record) {
            // Update the field
            record.isOldestMessageSyncCompleted = false;
            record.oldestMsgSyncCompleted = false;
            
            // Put the updated record back into the object store
            var putRequest = objectStore.put(record);
            
            putRequest.onsuccess = function(event) {
                console.log('Record updated successfully');
            };
            
            putRequest.onerror = function(event) {
                console.error('Error updating record:', event.target.error);
            };
        } else {
            console.error('Record not found');
        }
    };
    
    getRequest.onerror = function(event) {
        console.error('Error retrieving record:', event.target.error);
    };
};