## MINI CHALLENGE

bikin di routes auth/me seperti ini
```
router.get(
  "/auth/me",
  authMiddleware,
  aclMiddleware(["user", "admin"]),
  authController.me
);
```