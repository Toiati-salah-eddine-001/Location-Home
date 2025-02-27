// 
import { useState, useEffect } from 'react';

const useIndexedDB = (dbName, storeName) => {
    const [data, setData] = useState([]);
    const [db, setDb] = useState(null);
    const [isDbReady, setIsDbReady] = useState(false); 

    useEffect(() => {
        const request = indexedDB.open(dbName, 3); 
        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
                console.log(`تم إنشاء الـ object store: ${storeName}`);
            }
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            setDb(db);
            setIsDbReady(true); 
            console.log('تم فتح قاعدة البيانات بنجاح:', db);
            fetchData(db);
        };

        request.onerror = (event) => {
            console.error('حدث خطأ أثناء فتح قاعدة البيانات:', event.target.error);
        };
    }, [dbName, storeName]);

    const addData = (datalist) => {
        if (!isDbReady || !db) {
            console.error('قاعدة البيانات غير مفتوحة بعد.');
            return;
        }

        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        store.add(datalist);

        transaction.oncomplete = () => {
            console.log('تمت إضافة البيانات بنجاح:', datalist);
            fetchData(db);
        };

        transaction.onerror = (event) => {
            console.error('حدث خطأ أثناء إضافة البيانات:', event.target.error);
        };
    };

    const updateData = (id, updatedData) => {
        if (!isDbReady || !db) {
            console.error('قاعدة البيانات غير مفتوحة بعد.');
            return;
        }

        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.put({ ...updatedData, id });

        request.onsuccess = () => {
            console.log('تم تحديث البيانات بنجاح:', updatedData);
            fetchData(db);
        };

        request.onerror = (event) => {
            console.error('حدث خطأ أثناء تحديث البيانات:', event.target.error);
        };
    };

    const deleteData = (id) => {
        if (!isDbReady || !db) {
            console.error('Database is not ready yet.');
            return;
        }

        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        store.delete(id);

        transaction.oncomplete = () => {
            console.log('Data deleted successfully:', id);
            fetchData(db);
        };

        transaction.onerror = (event) => {
            console.error('Error deleting data:', event.target.error);
        };
    };

    const fetchData = (db) => {
        if (!db) {
            console.error('قاعدة البيانات غير مفتوحة بعد.');
            return;
        }

        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.getAll();

        request.onsuccess = (event) => {
            setData(event.target.result);
            console.log('تم جلب البيانات:', event.target.result);
        };

        request.onerror = (event) => {
            console.error('حدث خطأ أثناء جلب البيانات:', event.target.error);
        };
    };

    return { data, addData, isDbReady ,updateData , deleteData}; // إرجاع حالة جاهزية قاعدة البيانات
};

export default useIndexedDB;