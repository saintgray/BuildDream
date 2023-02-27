package com.jh.code.rest.l2;

import com.jh.code.jpo.CategoryJpo;
import com.jh.code.logic.CategoryLogic;
import com.jh.code.spec.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/categoryMgt")
public class CategoryMgtService {

    private final CategoryLogic logic;

    @PostMapping
    public List<CategoryJpo> getCategories(@RequestBody List<BigDecimal> categoryIndexList) {
        return this.logic.getCategoriesByParent(categoryIndexList);
    }


}
