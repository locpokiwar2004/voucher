import vouchersData from "./vouchers.json";
import partnersData from "./partners.json";

// Initialize state with static data
let vouchers = [...vouchersData];
let partners = [...partnersData];

// Helper functions to simulate data persistence
const findVoucherIndexById = (id) => vouchers.findIndex((v) => v.id === id);
const findPartnerById = (id) => partners.find((p) => p.id === id);

// Fetch vouchers with a delay
export const fetchVouchers = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(vouchers), 1000);
  });
};

// Fetch partners with a delay
export const fetchPartners = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(partners), 1000);
  });
};

// Add a new voucher
export const addVoucher = (newVoucher) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const maxId = vouchers.length ? Math.max(vouchers.map((v) => v.id)) : 0;
      newVoucher.id = maxId + 1;
      vouchers = [...vouchers, newVoucher];
      resolve(newVoucher);
    }, 500);
  });
};

// Update an existing voucher
export const updateVoucher = (id, updatedVoucher) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = findVoucherIndexById(id);
      if (index >= 0) {
        vouchers[index] = { ...vouchers[index], ...updatedVoucher };
        resolve(vouchers[index]);
      } else {
        resolve(null);
      }
    }, 500);
  });
};

// Delete a voucher
export const deleteVoucher = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      vouchers = vouchers.filter((v) => v.id !== id);
      resolve(id);
    }, 500);
  });
};
