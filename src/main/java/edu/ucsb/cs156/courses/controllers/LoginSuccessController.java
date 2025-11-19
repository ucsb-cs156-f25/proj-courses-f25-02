package edu.ucsb.cs156.courses.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginSuccessController {

  @PreAuthorize("hasRole('ROLE_USER')")
  @GetMapping("/login/success")
  public String loginSuccess() {
    return "forward:/index.html";
  }
}
