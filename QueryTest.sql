SELECT o.customerNumber, COUNT(od.productCode) AS total_orders
FROM orders o
JOIN orderdetails od ON o.orderNumber = od.orderNumber
JOIN products p on od.`productCode` = p.`productCode` 
WHERE p.productLine = 'Classic Cars'
GROUP BY o.customerNumber
HAVING COUNT(od.productCode) > 23;
