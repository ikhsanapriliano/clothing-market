-- store
INSERT INTO public."Store" (id, name, address, description, photo, "userId", "createdAt", "updatedAt") VALUES
('6df994bf-0d18-402e-ad92-4312ec63f30b', 'Lunar Shop', 'Jakarta', 'Lunar shop is the best', '', '3e255c7f-67db-4e36-97f5-876cf9b9102c', '2024-07-13 09:30:49.5', '2024-07-13 09:30:49.5'),
('4e958fb2-5370-4ee9-98ec-2611516ebaf2', 'David Shop', 'Bandung', 'David shop is the best', '', '83365662-4df1-482c-9416-25f4459edb0f', '2024-07-13 09:30:49.5', '2024-07-13 09:30:49.5'),
('4fbe845b-e644-4510-a857-6f983e2a6432', 'Sarah Shop', 'Surabaya', 'Sarah shop is the best', '', 'a911a9f0-3675-497d-b0cf-e0198644a236', '2024-07-13 09:30:49.5', '2024-07-13 09:30:49.5');

-- product
INSERT INTO public."Product" (id, name, description, price, stock, "categoryId", "storeId", "createdAt", "updatedAt")
VALUES
    ('aae2a058-d446-4b57-a5b8-0f4a83207fca', 'Basic T-shirt', 'T-shirt katun warna putih', 100000, 50, 'aae2a058-d446-4b57-a5b8-0f4a83207fca', '6df994bf-0d18-402e-ad92-4312ec63f30b', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('e15b7502-943f-429a-b488-7c684ef4b685', 'Formal Shirt', 'Kemeja formal warna biru', 150000, 30, 'e15b7502-943f-429a-b488-7c684ef4b685', '4e958fb2-5370-4ee9-98ec-2611516ebaf2', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('23ec758d-85a7-4813-a69e-c6ed4822c7d3', 'Casual Pants', 'Celana panjang warna hitam', 200000, 40, '23ec758d-85a7-4813-a69e-c6ed4822c7d3', '4fbe845b-e644-4510-a857-6f983e2a6432', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('75b4d445-4653-447f-9dc1-35fe7f1fdc53', 'Hoodie Jacket', 'Jaket hoodie warna abu-abu', 250000, 20, '75b4d445-4653-447f-9dc1-35fe7f1fdc53', '6df994bf-0d18-402e-ad92-4312ec63f30b', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('10013dc4-9a2d-4c88-8c39-c7aedf3028d0', 'Knitted Sweater', 'Sweater rajut warna merah', 180000, 25, '10013dc4-9a2d-4c88-8c39-c7aedf3028d0', '4e958fb2-5370-4ee9-98ec-2611516ebaf2', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('6eb08dce-4674-4e5e-a3cb-8ca4a017ce63', 'Sports Shoes', 'Sepatu olahraga warna hitam', 300000, 15, '6eb08dce-4674-4e5e-a3cb-8ca4a017ce63', '4fbe845b-e644-4510-a857-6f983e2a6432', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('e862269e-2968-4fa0-987b-6bb3dae3fcf4', 'Leather Sandals', 'Sandal kulit warna cokelat', 120000, 35, 'e862269e-2968-4fa0-987b-6bb3dae3fcf4', '6df994bf-0d18-402e-ad92-4312ec63f30b', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('dd202f9b-b4cb-4c7a-bd44-d773e2d31bf1', 'Cotton Socks', 'Kaos kaki katun warna putih', 30000, 100, 'dd202f9b-b4cb-4c7a-bd44-d773e2d31bf1', '4e958fb2-5370-4ee9-98ec-2611516ebaf2', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('5a85e11d-6cf8-4ab6-b707-41f15a692648', 'Baseball Hat', 'Topi baseball warna hitam', 80000, 40, '5a85e11d-6cf8-4ab6-b707-41f15a692648', '4fbe845b-e644-4510-a857-6f983e2a6432', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('bbed5ff9-fd3a-4561-a5d1-5238bf13b126', 'Sunglasses', 'Kacamata hitam', 150000, 25, 'bbed5ff9-fd3a-4561-a5d1-5238bf13b126', '6df994bf-0d18-402e-ad92-4312ec63f30b', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('b41c4e3c-ed89-4db6-b65a-bcfa8a2e9fd6', 'Leather Watch', 'Jam tangan kulit', 350000, 10, 'b41c4e3c-ed89-4db6-b65a-bcfa8a2e9fd6', '4e958fb2-5370-4ee9-98ec-2611516ebaf2', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('a45748db-112b-4c76-961c-f8affd67a791', 'Denim Skirt', 'Rok denim warna biru', 180000, 20, 'a45748db-112b-4c76-961c-f8affd67a791', '4fbe845b-e644-4510-a857-6f983e2a6432', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('d594f12d-05a4-472d-bab9-bf5e1e578f7d', 'Graphic Tee', 'Kaos grafis warna hitam', 120000, 45, 'aae2a058-d446-4b57-a5b8-0f4a83207fca', '6df994bf-0d18-402e-ad92-4312ec63f30b', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('e5d6ef7a-7cc4-4a1c-9b6c-19d5f74d0b5a', 'Dress Shirt', 'Kemeja dress warna putih', 170000, 28, 'e15b7502-943f-429a-b488-7c684ef4b685', '4e958fb2-5370-4ee9-98ec-2611516ebaf2', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513'),
    ('f2b890c6-0b77-4648-aed0-0fd97b2d26f7', 'Chino Pants', 'Celana chino warna khaki', 220000, 37, '23ec758d-85a7-4813-a69e-c6ed4822c7d3', '4fbe845b-e644-4510-a857-6f983e2a6432', '2024-07-13 09:30:49.513', '2024-07-13 09:30:49.513');